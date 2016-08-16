<?php

namespace App\Services\Actor\NfnLegacy;

use App\Services\Actor\ActorInterface;
use App\Services\Actor\ActorService;
use Exception;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use RuntimeException;

ini_set('memory_limit', '1024M');

class NfnLegacyExport implements ActorInterface
{
    /**
     * @var ActorService
     */
    private $service;

    /**
     * @var \App\Services\Actor\ActorFileService
     */
    private $fileService;

    /**
     * @var \App\Services\Actor\ActorImageService
     */
    private $imageService;

    /**
     * @var \App\Services\Actor\ActorRepositoryService
     */
    private $repoService;

    /** Notes from Nature export directory */
    protected $nfnExportDir;

    /**
     * Directories built based on 1GB file sizes or less.
     *
     * @var
     */
    protected $splitDir;

    /**
     * Count of chunk directory.
     *
     * @var
     */
    protected $count = 0;

    /**
     * @var
     */
    public $lrgFilePath;

    /**
     * @var
     */
    public $smFilePath;

    /**
     * @var mixed
     */
    private $largeWidth;

    /**
     * @var mixed
     */
    private $smallWidth;

    /**
     * @var
     */
    protected $imageUris;

    /**
     * @var
     */
    protected $existingImageUris;

    /**
     * NfnLegacyExport constructor.
     *
     * @param ActorService $service
     */
    public function __construct(
        ActorService $service
    )
    {
        $this->service = $service;
        $this->fileService = $service->fileService;
        $this->imageService = $service->imageService;
        $this->repoService = $service->repositoryService;

        $this->nfnExportDir = $this->service->config->get('config.nfn_export_dir');
        $this->largeWidth = $this->service->config->get('config.nfnImageSize.largeWidth');
        $this->smallWidth = $this->service->config->get('config.nfnImageSize.smallWidth');
    }

    /**
     * Process current state
     *
     * @param $actor
     * @return mixed|void
     * @throws \RuntimeException|\Exception
     */
    public function process($actor)
    {
        try {
            $this->fileService->makeDirectory($this->nfnExportDir);

            $record = $this->repoService->expedition
                ->skipCache()
                ->with(['project.group', 'subjects'])
                ->find($actor->pivot->expedition_id);

            $folder = $actor->id . '-' . md5($record->title);

            $this->fileService->setDirectories($folder);

            $this->imageService->setWorkingDirVars(
                $this->fileService->workingDir,
                $this->fileService->workingDirOrig,
                $this->fileService->workingDirConvert
            );

            $this->imageService->buildImageUris($actor, $record->subjects);

            $this->imageService->getImages();

            $files = $this->fileService->getFiles($this->fileService->workingDirOrig);

            $attributes = [
                [
                    'ext'   => 'large.jpg',
                    'width' => $this->largeWidth
                ],
                [
                    'ext'   => 'small.jpg',
                    'width' => $this->smallWidth
                ],
            ];

            $this->imageService->convert($files, $attributes);

            $this->splitDirectories($folder);

            $this->fileService->filesystem->deleteDirectory($this->fileService->workingDirOrig);

            $directories = $this->buildDetails();

            $tarGzFiles = $this->fileService->compressDirectories($directories);

            $this->repoService->createDownloads($record->id, $actor->id, $tarGzFiles);

            $this->fileService->moveCompressedFiles($this->fileService->workingDir, $this->nfnExportDir);

            $this->fileService->filesystem->deleteDirectory($this->fileService->workingDir);

            $this->sendReport($record);

            $actor->pivot->completed = 1;
            $actor->pivot->queued = 0;
            ++$actor->pivot->state;
            $actor->pivot->save();
        }
        catch(FileNotFoundException $e) {}
        catch(RuntimeException $e) {}
        catch(Exception $e)
        {
            $actor->pivot->queued = 0;
            $actor->pivot->error = 1;
            $actor->pivot->save();

            $this->service->report->addError($e->getMessage());
            $this->service->report->addError($e->getFile());
            $this->service->report->addError($e->getLine());
            $this->service->report->reportSimpleError();
        }

    }

    /**
     * Split tmp directory into separate directories based on size.
     *
     * @param $folder
     */
    public function splitDirectories($folder)
    {
        $size = 0;
        $this->setSplitDir($folder);
        $limit = $this->getDirectorySize();
        $files = $this->fileService->getFiles($this->fileService->workingDirOrig);

        foreach ($files as $file)
        {
            $this->imageService->image->setImagePathInfo($file);

            if ($this->imageService->image->getMimeType() === false)
            {
                continue;
            }

            $fileName = $this->imageService->image->getFileName();
            $baseName = $this->imageService->image->getBaseName();

            $lrgFilePath = $this->imageService->workingDirConvert . '/' . $fileName . '.large.jpg';
            $smFilePath = $this->imageService->workingDirConvert . '/' . $fileName . '.small.jpg';

            $size += filesize($lrgFilePath);
            $size += filesize($smFilePath);

            $this->fileService->filesystem->move($lrgFilePath, $this->lrgFilePath . '/' . $fileName . '.large.jpg');
            $this->fileService->filesystem->move($smFilePath, $this->smFilePath . '/' . $fileName . '.small.jpg');
            $this->fileService->filesystem->move($file, $this->splitDir . "/$baseName");

            if ($size >= $limit)
            {
                $this->setSplitDir($folder);
                $size = 0;
            }
        }

        $this->fileService->filesystem->deleteDirectory($this->fileService->workingDirConvert);
    }

    /**
     * Build detail.js file.
     */
    public function buildDetails()
    {
        $directories = $this->fileService->filesystem->directories($this->fileService->workingDir);

        $metadata = [];
        $metadata['sourceDir'] = $this->fileService->workingDir;
        $metadata['targetDir'] = $this->fileService->workingDir;
        $metadata['created_at'] = date('l jS F Y', time());
        $metadata['highResDir'] = $this->fileService->workingDir . '/large';
        $metadata['lowResDir'] = $this->fileService->workingDir . '/small';
        $metadata['highResWidth'] = $this->largeWidth;
        $metadata['lowResWidth'] = $this->smallWidth;
        $metadata['total'] = 0;
        $metadata['images'] = [];

        foreach ($directories as $directory)
        {
            $files = $this->fileService->filesystem->files($directory);

            $i = 0;
            foreach ($files as $file)
            {
                $data = [];

                // Original Image info.
                $this->imageService->image->setImagePathInfo($file);
                $baseName = $this->imageService->image->getBaseName();
                $fileName = $this->imageService->image->getFileName();
                $extension = $this->imageService->image->getFileExtension();
                $this->imageService->image->setImageInfoFromFile($file);

                // Set array for original image.
                $data['identifier'] = $fileName;
                $data['original']['path'] = [$fileName, ".$extension"];
                $data['original']['name'] = $baseName;
                $data['original']['width'] = $this->imageService->image->getImageWidth();
                $data['original']['height'] = $this->imageService->image->getImageHeight();

                // Set array for large image.
                $this->imageService->image->setImageInfoFromFile("$directory/large/$fileName.large.$extension");
                $data['large']['name'] = "large/$fileName.large.$extension";
                $data['large']['width'] = $this->imageService->image->getImageWidth();
                $data['large']['height'] = $this->imageService->image->getImageHeight();

                // Set array for small image.
                $this->imageService->image->setImageInfoFromFile("$directory/small/$fileName.small.$extension");
                $data['small']['name'] = "small/$fileName.small.$extension";
                $data['small']['width'] = $this->imageService->image->getImageWidth();
                $data['small']['height'] = $this->imageService->image->getImageHeight();

                $metadata['images'][] = $data;

                $this->fileService->filesystem->delete($file);

                $i++;
            }

            $metadata['total'] = $i * 2;

            $this->fileService->filesystem->put($directory . '/details.js', json_encode($metadata, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
        }

        return $directories;
    }

    /**
     * Create split directories.
     *
     * @param $folder
     */
    public function setSplitDir($folder)
    {
        $count = ++$this->count;
        $this->splitDir = $this->fileService->workingDir . '/' . $folder . '-' . $count;

        $this->lrgFilePath = $this->splitDir . '/large';
        $this->fileService->makeDirectory($this->lrgFilePath);

        $this->smFilePath = $this->splitDir . '/small';
        $this->fileService->makeDirectory($this->smFilePath);
    }

    /**
     * Set directory sizes for download files.
     *
     * @return float
     */
    protected function getDirectorySize()
    {
        exec("du -b -s {$this->fileService->workingDirConvert}", $op);
        list($size) = preg_split('/\s+/', $op[0]);

        $gb = 1073741824;

        return ($size < $gb) ? $size : ceil($size / ceil(number_format($size / $gb, 2)));
    }

    /**
     * Send report for process completing.
     *
     * @param $record
     */
    protected function sendReport($record)
    {
        $vars = [
            'title' => $record->title,
            'message' => trans('emails.expedition_export_complete_message', ['expedition', $record->title]),
            'groupId' => $record->project->group->id,
            'attachmentName' => trans('emails.missing_images_attachment_name', ['recordId' => $record->id])
        ];

        $this->service->processComplete($vars, $this->imageService->getMissingImages());
    }
}
