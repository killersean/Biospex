<?php

namespace App\Jobs;

use App\Exceptions\BiospexException;
use App\Services\Report\Report;
use App\Services\Process\PanoptesTranscriptionProcess;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class NfnClassificationsTranscriptJob extends Job implements ShouldQueue
{

    use InteractsWithQueue, SerializesModels, DispatchesJobs;

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
     * @param array $ids
     */
    public function __construct(array $ids = [])
    {
        $this->ids = collect($ids);
    }

    /**
     * Execute the job.
     *
     * @param PanoptesTranscriptionProcess $transcription
     * @param Report $report
     * @return void
     */
    public function handle(
        PanoptesTranscriptionProcess $transcription,
        Report $report
    )
    {
        if ($this->ids->isEmpty())
        {
            $this->delete();

            return;
        }

        $this->ids->each(function($id) use ($transcription, $report) {
            $this->processCsvFile($transcription, $report, $id);
        });

        if ( ! empty($transcription->getCsvError()) || $report->checkErrors())
        {
            $report->addError('Panoptes Transcript Error');
            $report->reportError(null, $transcription->getCsvError());
        }

        $this->dispatch((new WeDigBioDashboardJob($this->ids))->onQueue(config('config.beanstalkd.classification')));
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
