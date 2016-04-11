<?php

namespace App\Services\Process;


use App\Repositories\Contracts\Subject;
use Illuminate\Support\Facades\Artisan;
use GuzzleHttp\Client;
use Exception;
use Illuminate\Support\Facades\Config;

class OcrRequest
{

    /**
     * @var Client
     */
    protected $client;

    /**
     * @var Subject
     */
    protected $subject;
    
    /**
     * Ocr constructor.
     *
     * @param Subject $subject
     */
    public function __Construct(
        Subject $subject
    )
    {
        $this->client = new Client();
        $this->subject = $subject;
    }

    /**
     * Send json data as file.
     *
     * @param $record
     * @return bool
     * @throws \Exception
     */
    public function sendOcrFile($record)
    {
        $options = [
            'multipart' => [
                [
                    'name'     => 'response',
                    'contents' => 'http'
                ],
                [
                    'name'     => 'file',
                    'contents' => $record->data,
                    'filename' => $record->uuid . '.json',
                ]
            ]];

        $response = $this->client->request('POST', Config::get('config.ocr_post_url'), $options);

        if ($response->getStatusCode() !== 202) {
            throw new \UnexpectedValueException(trans('emails.error_ocr_curl',
                ['id' => $record->id, 'message' => print_r($response->getBody(), true)]));
        }
    }

    /**
     * Request file from ocr server
     *
     * @param $uuid
     * @return string
     */
    public function requestOcrFile($uuid)
    {
        $response = $this->client->get(Config::get('config.ocr_get_url') . '/' . $uuid . '.json');
        $contents = $response->getBody()->getContents();

        return json_decode($contents);
    }

    /**
     * Check if ocr file header exists
     *
     * @param $file
     * @return bool
     */
    public function checkOcrFileHeaderExists($file)
    {
        return isset($file->header);
    }

    /**
     * Check ocr file status for progress
     *
     * @param $file
     * @return bool
     */
    public function checkOcrFileInProgress($file)
    {
        return $file->header->status === 'in progress';
    }

    /**
     * Check ocr file status for error
     *
     * @param $file
     * @return bool
     */
    public function checkOcrFileError($file)
    {
        return $file->header->status === 'error';
    }

    /**
     * Update subject ocr fields based on ocr file results
     *
     * @param $file
     * @return array
     */
    public function updateSubjectsFromOcrFile($file)
    {
        $csv = [];
        foreach ($file->subjects as $id => $data)
        {
            if ($data->ocr === 'error')
            {
                $csv[] = ['id' => $id, 'message' => implode(' -- ', $data->messages), 'url' => $data->url];
                continue;
            }

            $subject = $this->subject->find($id);
            $subject->ocr = $data->ocr;
            $subject->save();
        }

        return $csv;
    }

    /**
     * Send request to delete json files on ocr server.
     *
     * @param $files
     */
    public function deleteJsonFiles($files)
    {
        Artisan::call('ocrfile:delete', ['files' => $files]);
    }
}