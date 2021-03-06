<?php

namespace App\Services\Image;

use Imagick;

class ImagickService
{
    /**
     * @var Imagick
     */
    public $imagick;

    /**
     * @var
     */
    public $destinationImageWidth;

    /**
     * @var
     */
    public $destinationImageHeight;

    /**
     * Create Imagick object.
     *
     * @throws \ImagickException
     */
    public function createImagickObject()
    {
        $this->imagick = new Imagick();
        $this->imagick->setResourceLimit(6, 1);
    }

    /**
     * Clear Imagick object.
     *
     * @return bool
     */
    public function clearImagickObject()
    {
        return $this->imagick->clear();
    }

    /**
     * Read image from blob
     *
     * @param $source
     * @return bool
     * @throws \ImagickException
     */
    public function readImagickFromBlob($source)
    {
        return $this->imagick->readImageBlob($source);
    }

    /**
     * @param $source
     * @return bool
     * @throws \ImagickException
     */
    public function readImageFromPath($source)
    {
        return $this->imagick->readImage($source);
    }

    /**
     * @param $width
     */
    public function setDestinationImageWidth($width)
    {
        $this->destinationImageWidth = $width;
    }

    /**
     * @param $height
     */
    public function setDestinationImageHeight($height)
    {
        $this->destinationImageHeight = $height;
    }

    /**
     * Resize image.
     */
    public function resizeImage()
    {
        if (isset($this->destinationImageWidth, $this->destinationImageHeight)) {
            $this->imagick->resizeImage($this->destinationImageWidth, $this->destinationImageHeight, Imagick::FILTER_LANCZOS, 1);
        }
    }

    /**
     * Set ImageMagick option.
     *
     * @param $option
     * @param $value
     * @return bool
     * @throws \ImagickException
     */
    public function setOption($option, $value)
    {
        if ( ! $this->imagick->setOption($option, $value)){
            throw new \ImagickException('Error setting Imagick option.');
        }
    }

    /**
     * Set imagick image format.
     *
     * @param string $format
     * @throws \ImagickException(
     */
    public function setImageFormat($format = 'jpg')
    {
        if ( ! $this->imagick->setImageFormat($format)) {
            throw new \ImagickException('Error while setting image format.');
        }
    }

    /**
     * Strip metadata.
     *
     * @throws \Exception
     */
    public function stripImage()
    {
        if ( ! $this->imagick->stripImage()) {
            throw new \ImagickException('Error while stripping image metadata.');
        }
    }

    /**
     * Write imagick image.
     *
     * @param $destination
     * @return bool
     */
    public function writeImagickImageToFile($destination)
    {
        return $this->imagick->writeImage($destination);
    }
}