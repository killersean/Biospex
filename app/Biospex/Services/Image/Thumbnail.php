<?php

namespace Biospex\Services\Image;

use GuzzleHttp\Client;
use GuzzleHttp\Event\CompleteEvent;
use GuzzleHttp\Event\ErrorEvent;
use GuzzleHttp\Exception\BadResponseException;
use GuzzleHttp\Exception\RequestException;

class Thumbnail extends Image
{
    /**
     * Output file path.
     *
     * @var
     */
    protected $outputFile;

    /**
     * @var
     */
    protected $outputFileSm;

    /**
     * @var
     */
    protected $outputFileLg;

    /**
     * Output directory
     *
     * @var string
     */
    protected $outputDir;

    /**
     * Default image.
     *
     * @var mixed
     */
    private $defaultImg;

    /**
     * Thumbnail width.
     *
     * @var
     */
    private $tnWidth;

    /**
     * Thumbnail height.
     *
     * @var
     */
    private $tnHeight;

    /**
     * Set variables.
     */
    public function setVars()
    {
        // We can read the output path from our configuration file.
        $this->defaultImg = \Config::get('config.images.thumbDefaultImg');
        $this->tnWidth = \Config::get('config.images.thumbWidth');
        $this->tnHeight = \Config::get('config.images.thumbHeight');
        $this->outputDir = \Config::get('config.images.thumbOutputDir') . '/' . $this->tnWidth . '_' . $this->tnHeight;
        $this->createDir($this->outputDir);
    }

    /**
     * Resize on the fly.
     *
     * @param $url
     * @return string
     */
    public function thumbFromUrl($url)
    {
        $client = new Client();
        try {
            $response = $client->get($url);
            $this->saveThumbnail($response->getBody()->getContents());
        } catch (BadResponseException $e) {
            \Log::error($e->getMessage());
        }

        return $this->thumbExists($this->outputFileSm) ?
            $this->getFile($this->outputFileSm) : $this->getFile($this->defaultImg);
    }

    /**
     * Return thumbnail or create if not exists.
     *
     * @param $url
     * @return string
     */
    public function getThumbnail($url)
    {
        $this->setVars();
        $this->setOutPutFile($url);

        if ($this->thumbExists($this->outputFileSm)) {
            return $this->getFile($this->outputFileSm);
        }

        $file =$this->thumbFromUrl($url);

        return $file;
    }

    /**
     * Save thumb file.
     * @param $image
     */
    public function saveThumbnail($image)
    {
        $this->saveFile($this->outputFileLg, $image);
        $this->imagickFile($this->outputFileLg);
        $this->imagickScale($this->outputFileSm, $this->tnWidth, 0);
        $this->deleteImage($this->outputFileLg);
        $this->imagickDestroy();

        return;
    }

    /**
     * Set output file path.
     *
     * @param $url
     * @return string
     */
    public function setOutPutFile($url)
    {
        $filenameLg = md5($url) . '.jpg';
        $filenameSm = md5($url) . '.small.jpg';
        $this->outputFileLg = $this->outputDir . '/' . $filenameLg;
        $this->outputFileSm = $this->outputDir . '/' . $filenameSm;
    }

    /**
     * Get file
     * @param $file
     * @return string
     */
    public function getFile($file)
    {
        return \File::get($file);
    }

    /**
     * Check file exists
     * @param $file
     * @return bool
     */
    public function thumbExists($file)
    {
        return \File::isFile($file);
    }
}
