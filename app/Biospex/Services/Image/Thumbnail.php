<?php

namespace Biospex\Services\Image;

use Biospex\Services\Curl\Curl;

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
    }

    /**
     * Resize on the fly.
     *
     * @param $url
     * @return string
     */
    public function thumbFromUrl($url)
    {
        $this->setOutPutFile($url);
        $this->createDir($this->outputDir);

        if (\File::isFile($this->outputFileSm)) {
            return $this->outputFileSm;
        }

        try {
            $rc = new Curl([$this, "saveThumbnail"]);
            $rc->options = [CURLOPT_RETURNTRANSFER => 1, CURLOPT_FOLLOWLOCATION => 1, CURLINFO_HEADER_OUT => 1];
            $rc->get($url);
            $rc->execute();
        } catch (\Exception $e) {
            \Log::critical($e->getMessage());
        }

        return $this->outputFileSm;
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

        if (! $file = $this->thumbFromUrl($url)) {
            $file = $this->defaultImg;
        }

        return \File::get($file);
    }

    /**
     * Save thumb file.
     *
     * @param $image
     * @param $info
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
}
