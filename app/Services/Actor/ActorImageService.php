<?php

namespace App\Services\Actor;

use App\Models\Actor;
use App\Services\File\FileService;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Pool;
use App\Services\Image\ImageService;
use Log;

class ActorImageService
{

    /**
     * @var Client
     */
    private $client;

    /**
     * @var
     */
    private $missingImages = [];

    /**
     * @var
     */
    private $subjects;

    /**
     * @var ImageService
     */
    public $imageService;

    /**
     * @var FileService
     */
    public $fileService;

    /**
     * @var
     */
    protected $actor;

    /**
     * @var int
     */
    protected $processed = 0;

    /**
     * @var int
     */
    protected $subjectCount = 0;

    /**
     * ActorImageService constructor.
     *
     * @param ImageService $imageService
     * @param FileService $fileService
     */
    public function __construct(ImageService $imageService, FileService $fileService)
    {
        $this->client = new Client();
        $this->imageService = $imageService;
        $this->fileService = $fileService;
    }

    /**
     * Add missing image information to array.
     *
     * @param $subject
     * @param null $message
     */
    public function setMissingImages($subject, $message = null)
    {
        $this->missingImages[] = ['subjectId' => $subject->_id, 'accessURI' => $subject->accessURI, 'message' => $message];
    }

    /**
     * Return missing images array.
     *
     * @return mixed
     */
    public function getMissingImages()
    {
        return $this->missingImages;
    }

    /**
     * Process expedition for export.
     *
     * @param array $subjects
     * @param array $fileAttributes
     * @param Actor $actor
     */
    public function getImages($subjects, $fileAttributes, Actor $actor)
    {
        $this->subjects = $subjects;
        $this->subjectCount = count($this->subjects);
        $this->actor = $actor;

        $attributes = array_key_exists(0, $fileAttributes) ? $fileAttributes : [$fileAttributes];

        $requests = function ($subjects) use ($attributes)
        {
            foreach ($subjects as $index => $subject)
            {
                if ( ! $this->checkUriExists($subject))
                {
                    Log::alert("URI does not exist " . $subject->_id);
                    $this->updateActor();

                    continue;
                }

                if ($this->checkImageExists($subject->_id, $attributes))
                {
                    Log::alert("Image exists for " . $subject->_id);
                    $this->updateActor();

                    continue;
                }

                yield $index => new Request('GET', str_replace(' ', '%20', $subject->accessURI));
            }
        };

        $pool = new Pool($this->client, $requests($subjects), [
            'concurrency' => 10,
            'fulfilled'   => function ($response, $index) use ($attributes, $actor)
            {
                $this->saveImage($response, $index, $attributes);
            },
            'rejected'    => function ($reason, $index)
            {
                $this->updateActor();
                $this->setMissingImages($this->subjects[$index], 'Could not retrieve image from uri.');
            }
        ]);

        $promise = $pool->promise();

        $promise->wait();
    }

    /**
     * Save image to image path.
     *
     * @param $response
     * @param $index
     * @param $attributes
     */
    private function saveImage($response, $index, $attributes)
    {
        $image = $response->getBody()->getContents();

        if ($image === '' || $response->getStatusCode() !== 200)
        {
            Log::alert("Bad Status Code {$this->subjects[$index]->_id}");
            $this->setMissingImages($this->subjects[$index], 'Image empty: ' . $response->getStatusCode());

            return;
        }

        if ( ! $this->imageService->setSourceFromString($image))
        {
            Log::alert("Error source from string {$this->subjects[$index]->_id}");
            $this->setMissingImages($this->subjects[$index], 'Could not create image from string: ' . $response->getStatusCode());

            return;
        }

        if ( ! $this->imageService->generateAndSaveImage($this->subjects[$index]->_id, $attributes))
        {
            Log::alert("Error saving image {$this->subjects[$index]->_id}");
            $this->removeErrorFiles($index, $attributes);
            $this->setMissingImages($this->subjects[$index], 'Could not save image to destination file');

            return;
        }

        Log::alert("Saved {$this->subjects[$index]->_id}");

        $this->imageService->destroySource();
        $this->updateActor();
    }

    /**
     * Check if image exists.
     *
     * @param $id
     * @param array $attributes
     * @return bool
     */
    private function checkImageExists($id, $attributes)
    {
        $total = count($attributes);
        foreach ($attributes as $attribute)
        {
            Log::alert("{$attribute['destination']}/{$id}.{$attribute['extension']}");
            $total -= count($this->fileService->filesystem->glob("{$attribute['destination']}/{$id}.{$attribute['extension']}"));
        }

        return $total === 0;
    }

    /**
     * Check if image exists
     *
     * @param $subject
     * @return bool
     */
    private function checkUriExists($subject)
    {
        if ($subject->accessURI === '')
        {
            $this->setMissingImages($subject, 'Image missing accessURI');

            return false;
        }

        return true;
    }

    /**
     * Remove any subject images that existed when error occurred.
     *
     * @param $index
     * @param array $attributes
     */
    private function removeErrorFiles($index, $attributes)
    {
        foreach ($attributes as $attribute)
        {
            $path = $attribute['destination'] . '/' . $this->subjects[$index]->_id . $attribute['extension'];
            if ($this->fileService->filesystem->exists($path))
            {
                @unlink($path);
            }
        }
    }

    /**
     * Update actor processed column.
     */
    private function updateActor()
    {
        $this->actor->pivot->processed++;
        $this->actor->pivot->save();
    }
}