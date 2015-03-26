<?php namespace Biospex\Services\Actor;
/**
 * NotesFromNature.php
 *
 * @package    Biospex Package
 * @version    1.0
 * @author     Robert Bruhn <bruhnrp@gmail.com>
 * @license    GNU General Public License, version 3
 * @copyright  (c) 2014, Biospex
 * @link       http://biospex.org
 *
 * This file is part of Biospex.
 * Biospex is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Biospex is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Biospex.  If not, see <http://www.gnu.org/licenses/>.
 */

class NotesFromNature extends ActorAbstract
{
    /**
     * @var array
     */
    protected $states = [];

	/**
	 * Actor object
	 */
	protected $actor;

	/**
	 * Expedition Id
	 */
	protected $expeditionId;

    /**
     * Current expedition being processed
     *
     * @var
     */
    protected $record;

    /**
     * Data Directory
     *
     * @var string
     */
    protected $dataDir;

    /**
     * Full path to temp file director
     * @var
     */
    protected $tmpFileDir;

    /**
     * Path to large images inside temp folder
     * @var
     */
    protected $lrgTargetPath;

    /**
     * Path to small images inside temp folder
     * @var
     */
    protected $smTargetPath;

    /**
     * Title of temp folder and tar file
     * @var
     */
    protected $title;

    /**
     * CSV header array associated with meta file
     * @var array
     */
    protected $metaHeader = [];

    /**
     * Remote image column from csv import
     * @var
     */
	protected $accessURI = "accessURI";

    /**
     * Missing image when retrieving via curl
     *
     * @var array
     */
    protected $missingImg = [];

    /**
     * Data array for images
     * @var array
     */
    protected $data = [];

    /**
     * Metadata array for images
     * @var array
     */
    protected $metadata = [];

    /**
     * Array to hold subjects and identifiers
     *
     * @var
     */
    protected $identifierArray;

    /**
     * Large image width for NfN
     *
     * @var int
     */
    private $largeWidth = 1540;

    /**
     * Small image width for NfN
     *
     * @var int
     */
    private $smallWidth  = 580;

	/**
	 * Set properties
	 *
	 * @param $actor
	 */
	public function setProperties ($actor)
    {
		$this->states = [
            'export',
            'getStatus',
            'getResults',
            'completed',
            'analyze',
		];

		$this->actor = $actor;
		$this->expeditionId = $actor->pivot->expedition_id;

        return;
    }

    /**
     * Process current state
     */
    public function process()
    {
		$this->expedition->setPass(true);
		$this->record = $this->expedition->findWith($this->expeditionId, ['project.group', 'subjects']);

        if (empty($this->record))
        {
            $this->report->addError(trans('emails.error_process', ['id' => $this->expeditionId]));
			$this->report->reportSimpleError($this->record->project->group->id);

            return;
        }

		try {
            $result = call_user_func([$this, $this->states[$this->actor->pivot->state]]);

			if ( ! $result)
				return;
        }
        catch ( Exception $e )
        {
            $this->report->addError($e->getMessage());
			$this->report->reportSimpleError($this->record->project->group->id);
			$this->filesystem->deleteDirectory($this->tmpFileDir);

            return;
        }

        return;
    }

    /**
     * Get results
     */
    public function getResults()
    {
        return false;
    }

    /**
     * Get status
     */
    public function getStatus()
    {
        return false;
    }

    /**
     * Export the expedition
     *
     * @throws \RuntimeException
     */
    public function export()
    {
		$this->setPaths();

		$this->buildImgDir();

        $this->processImages();

		$this->saveFile("{$this->tmpFileDir}/details.js", json_encode($this->metadata, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

        $this->executeCommand("tar -czf {$this->dataDir}/$this->title.tar.gz -C {$this->dataDir}/$this->title");

		if (!empty($this->missingImg))
		{
			$groupId = $this->record->project->group_id;
			$this->report->missingImages($groupId, $this->record->title, $this->missingImg);
		}

		$this->createDownload($this->record->id, $this->actor->id, "{$this->title}.tar.gz");

		$this->filesystem->deleteDirectory($this->tmpFileDir);

		$groupId = $this->record->project->group_id;

		$this->actor->pivot->state = $this->actor->pivot->state+1;
		$this->actor->pivot->save();

		$this->report->processComplete($groupId, $this->record->title);

        return true;
    }

    /**
     * Process expedition for export
     */
    protected function buildImgDir()
    {
        $i = 0;
		foreach ($this->record->subjects as $subject)
        {
			// Sets up array for retrieving identifier when building details.js
            $this->identifierArray[$subject->_id] = $subject->id;

			$uri = $subject->{$this->accessURI};

			if (empty($uri))
			{
				$this->missingImg[] = $subject->id;
				continue;
			}

			$image = $this->image->getImageFromUrl($uri);

			if (empty($image))
			{
				$this->missingImg[] = $subject->id . ' : ' . $uri;
				continue;
			}

			$ext = $this->image->getExtension($image, true);

			if ( ! $ext)
			{
				$this->missingImg[] = $subject->id . ' : ' . $uri;
				continue;
			}

			$path = $this->tmpFileDir . '/' . $subject->_id . $ext;

			$this->saveFile($path, $image);

            $i++;
        }

		if ($i == 0)
			throw new \RuntimeException(trans('emails.error_build_image_dir', ['id' => $this->record->id]));

		return;
    }

    /**
     * Process images for NfN for an expedition
     */
    protected function processImages()
    {
        $data = [];

        $files = $this->filesystem->files($this->tmpFileDir);

        $this->metadata['sourceDir'] = $this->tmpFileDir;
        $this->metadata['targetDir'] = $this->tmpFileDir;
        $this->metadata['created_at'] = date('l jS F Y', time());
		$this->metadata['highResDir'] = $this->lrgTargetPath;
		$this->metadata['lowResDir'] = $this->smTargetPath;
        $this->metadata['highResWidth'] = $this->largeWidth;
        $this->metadata['lowResWidth'] = $this->smallWidth;

        $i = 0;
		foreach ($files as $key => $filePath)
		{
            list($width, $height) = getimagesize($filePath); // $width, $height, $type, $attr
			$sourceInfo = pathinfo($filePath); // $dirname, $basename, $extension, $filename
			$sourceFilePath = $sourceInfo['dirname'] . '/' . $sourceInfo['basename'];

			$lrgTargetHeight = $this->setProportion($width, $height, $this->largeWidth);
			$lrgTargetName = "{$sourceInfo['filename']}.large.png";
			$targetFilePathLg = $this->lrgTargetPath . '/' . $lrgTargetName;

			$smTargetHeight = $this->setProportion($width, $height, $this->smallWidth);
			$smTargetName = "{$sourceInfo['filename']}.small.png";
			$targetFilePathSm = $this->smTargetPath . '/' . $smTargetName;

			// Set array
			$data['identifier'] = $this->identifierArray[$sourceInfo['filename']];
			$data['original']['path'] = [$sourceInfo['filename'], ".{$sourceInfo['extension']}"];
			$data['original']['name'] = $sourceInfo['basename'];
            $data['original']['width'] = $width;
            $data['original']['height'] = $height;

			$data['large']['name'] = "large/$lrgTargetName";
            $data['large']['width'] = $this->largeWidth;
			$data['large']['height'] = $lrgTargetHeight;

			$data['small']['name'] = "small/$smTargetName";
			$data['small']['width'] = $this->smallWidth;
			$data['small']['height'] = $smTargetHeight;

            $this->image->setWidth($this->largeWidth);
			$this->image->setHeight($lrgTargetHeight);
			$this->image->resizeImage($sourceFilePath, $targetFilePathLg);

            $width = "{$this->largeWidth}x{$this->smallWidth}";
            shell_exec("gm convert -size $width $sourceFilePath -resize $width $targetFilePathSm");

			$this->image->setWidth($this->smallWidth);
			$this->image->setHeight($smTargetHeight);
			$this->image->resizeImage($sourceFilePath, $targetFilePathSm);

            $this->metadata['images'][] = $data;

			$this->filesystem->delete($filePath);

            \Log::alert("Processed $sourceFilePath");

            $i++;
        }
		$this->metadata['total'] = $i * 2;

        return true;
    }

    /**
     * Set paths used.
     */
    protected function setPaths()
    {
        $this->title = "{$this->record->id}-" . (preg_replace('/[^a-zA-Z0-9]/', '', substr(md5(uniqid(mt_rand(), true)), 0, 10)));
        $this->tmpFileDir = "{$this->dataDir}/$this->title";
        $this->createDir($this->tmpFileDir);
        $this->writeDir($this->tmpFileDir);

        $this->lrgTargetPath = $this->tmpFileDir . '/large';
        $this->createDir($this->lrgTargetPath);
        $this->writeDir($this->lrgTargetPath);

        $this->smTargetPath = $this->tmpFileDir . '/small';
        $this->createDir($this->smTargetPath);
        $this->writeDir($this->smTargetPath);
    }

	protected function setProportion($width, $height, $limit)
	{
		return round(($height * $limit) / $width);
	}
}