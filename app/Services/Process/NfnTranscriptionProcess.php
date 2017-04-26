<?php

namespace App\Services\Process;

use App\Repositories\Contracts\Subject;
use App\Repositories\Contracts\NfnTranscription;
use Illuminate\Config\Repository as Config;
use Illuminate\Validation\Factory as Validation;
use ForceUTF8\Encoding;
use App\Services\Csv\Csv;

class NfnTranscriptionProcess
{

    /**
     * @var mixed
     */
    protected $collection;

    /**
     * @var Subject
     */
    protected $subject;

    /**
     * @var NfnTranscription
     */
    protected $transcription;

    /**
     * @var
     */
    protected $csv = [];

    /**
     * @var Config
     */
    protected $config;

    /**
     * @var Validation
     */
    protected $factory;

    /**
     * @var
     */
    protected $expeditionId;


    /**
     * NfnTranscription constructor.
     * @param Subject $subject
     * @param NfnTranscription $transcription
     * @param Config $config
     * @param Validation $factory
     * @param Csv $csv
     */
    public function __construct(
        Subject $subject,
        NfnTranscription $transcription,
        Config $config,
        Validation $factory,
        Csv $csv
    )
    {
        $this->config = $config;
        $this->collection = $this->config->get('config.collection');
        $this->subject = $subject;
        $this->transcription = $transcription;
        $this->factory = $factory;
        $this->csv = $csv;
    }

    /**
     * Process csv file.
     *
     * @param $file
     * @return array
     */
    public function process($file)
    {
        $this->csv->readerCreateFromPath($file);
        $this->csv->setDelimiter();
        $this->csv->setEnclosure();
        $this->csv->setEscape();

        $header = $this->prepareHeader($this->csv->getHeaderRow());

        $rows = $this->csv->fetch();
        foreach ($rows as $row)
        {
            if (empty($row[0]))
            {
                continue;
            }
            $this->processRow($header, $row);
        }

        return $this->csv;
    }

    /**
     * Prepare header
     * @param $header
     * @return array
     */
    protected function prepareHeader($header)
    {
        return array_replace($header, array_fill_keys(array_keys($header, 'created_at'), 'create_date'));
    }

    /**
     * Process an individual row
     * @param $header
     * @param $row
     * @throws \Exception
     */
    public function processRow($header, $row)
    {
        if (count($header) !== count($row))
        {
            $this->fixHeaderAndRowCount($header, $row);
            $combined = array_combine($header, $row);
            $this->csv[] = $combined;

            return;
        }

        array_walk($row, function ($value)
        {
            return Encoding::toUTF8($value);
        });

        $combined = array_combine($header, $row);

        if ($this->validateTranscription($combined)) {
            return;
        }

        if ( ! $subject = $this->getSubject($combined)) {
            $this->csv[] = $combined;

            return;
        }
        
        $this->setExpeditionId($combined['#expeditionId']);

        $addArray = ['project_id' => $subject->project_id, 'expedition_id' => $this->getExpeditionId()];
        $combined = array_merge($addArray, $combined);

        $this->transcription->create($combined);

    }

    /**
     * Get subject from db
     * If set collection exists, use filename to find subject
     * @param $combined
     * @return mixed
     */
    public function getSubject($combined)
    {
        if ($this->checkCollection($combined)) {
            $filename = strtok(trim($combined['filename']), '.');
            $subject = $this->subject->skipCache()->where(['accessURI', 'like', '%' . $filename . '%'])->first();
        } else {
            $subject = $this->subject->skipCache()->find(trim($combined['subject_id']));
        }

        return empty($subject) ? false : $subject;
    }

    /**
     * Check if FSU collection.
     *
     * @param $combined
     * @return bool
     */
    public function checkCollection($combined)
    {
        return strtolower(trim($combined['collection'])) === $this->collection;
    }

    /**
     * Validate transcription to prevent duplicates.
     *
     * @param $combined
     * @return mixed
     */
    public function validateTranscription($combined)
    {

        $rules = ['id' => 'unique_with:transcriptions,id'];
        $values = ['id' => $combined['id']];
        $validator = $this->factory->make($values, $rules);
        $validator->getPresenceVerifier()->setConnection('mongodb');

        // returns true if failed.
        return $validator->fails();

    }

    /**
     * Fix header and row count so the match.
     * @param $header
     * @param $row
     */
    protected function fixHeaderAndRowCount(&$header, &$row)
    {
        $headerCount = count($header);
        $rowCount = count($row);

        if ($headerCount < $rowCount)
        {
            $count = $rowCount - $headerCount;
            $this->addDummyValuesToArray($header, $count);
        }
        else
        {
            $count = $headerCount - $rowCount;
            $this->addDummyValuesToArray($row, $count);
        }
    }

    /**
     * Loop through and add dummy value to array
     * @param $array
     * @param $count
     */
    protected function addDummyValuesToArray(&$array, $count)
    {
        for ($i = 0; $i < $count; $i++)
        {
            $array[] = 'dummy_value_' . $i;
        }
    }

    /**
     * Set expedition id.
     * 
     * @param $id
     */
    public function setExpeditionId($id)
    {
        $this->expeditionId = (int) $id;
    }

    /**
     * Get expedition id.
     * 
     * @return mixed
     */
    public function getExpeditionId()
    {
        return $this->expeditionId;
    }
}
