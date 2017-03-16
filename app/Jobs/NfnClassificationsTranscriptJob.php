<?php

namespace App\Jobs;

use App\Exceptions\BiospexException;
use App\Services\Report\Report;
use App\Services\Process\PanoptesTranscriptionProcess;
use File;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class NfnClassificationsTranscriptJob extends Job implements ShouldQueue
{

    use InteractsWithQueue, SerializesModels;

    /**
     * @var array
     */
    public $ids;

    /**
     * @var bool
     */
    public $dir;

    /**
     * NfnClassificationsTranscriptJob constructor.
     *
     * @param null $ids
     */
    public function __construct($ids = null)
    {
        $this->ids = $ids;
    }

    /**
     * Execute the job.
     *
     * @param PanoptesTranscriptionProcess $transcription
     * @param Report $report
     * @return void
     */
    public function handle(PanoptesTranscriptionProcess $transcription, Report $report)
    {
        if (null === $this->ids)
        {
            $this->delete();

            return;
        }

        $csv = null;
        foreach ($this->ids as $id)
        {
            $csv = $this->processCsvFile($transcription, $report, $id);
        }

        if (null !== $transcription->getCsvError() || $report->checkErrors())
        {
            $report->addError('Panoptes Transcript Error');
            $report->reportError(null, $csv);
        }
    }

    /**
     * Process CSV file.
     *
     * @param PanoptesTranscriptionProcess $transcription
     * @param Report $report
     * @param $id
     */
    private function processCsvFile(PanoptesTranscriptionProcess $transcription, Report $report, $id)
    {
        try
        {
            $filePath = config('config.classifications_transcript') . '/' . $id . '.csv';
            if ( ! file_exists($filePath))
            {
                return;
            }

            $transcription->process($filePath);
        }
        catch (BiospexException $e)
        {
            $report->addError($e->getMessage());
        }
    }
}