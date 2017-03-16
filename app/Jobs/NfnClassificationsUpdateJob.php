<?php

namespace App\Jobs;

use App\Exceptions\NfnApiException;
use App\Repositories\Contracts\ExpeditionContract;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Config;

class NfnClassificationsUpdateJob extends Job implements ShouldQueue
{

    use InteractsWithQueue, SerializesModels, DispatchesJobs;

    /**
     * @var array|null
     */
    private $ids;

    /**
     * NfnClassificationsUpdateJob constructor.
     * @param array|null $ids
     */
    public function __construct($ids = null)
    {
        $this->ids = $ids;
    }

    /**
     * Execute job.
     *
     * @param ExpeditionContract $expeditionContract
     * @throws NfnApiException
     */
    public function handle(ExpeditionContract $expeditionContract)
    {
        $hasRelations = ['nfnWorkflow'];
        $withRelations = ['project.amChart', 'nfnWorkflow', 'nfnActor', 'stat'];

        $expeditions = null === $this->ids ?
            $expeditionContract->setCacheLifetime(0)
                ->findAllHasRelationsWithRelations($hasRelations, $withRelations) :
            $expeditionContract->setCacheLifetime(0)
                ->findWhereInHasRelationsWithRelations(['id', [$this->ids]], $hasRelations, $withRelations);

        foreach ($expeditions as $expedition)
        {
            if ($this->checkIfExpeditionShouldProcess($expedition))
            {
                continue;
            }

            $this->updateExpeditionStats($expeditionContract, $expedition);

            if ($expedition->project->amChart === null || ! $expedition->project->amChart->queued)
            {
                $this->dispatch((new AmChartJob($expedition->project->id))->onQueue(Config::get('config.beanstalkd.job')));
            }
        }

        $this->delete();
    }

    /**
     * Check needed variables.
     *
     * @param $expedition
     * @return bool
     */
    public function checkIfExpeditionShouldProcess($expedition)
    {
        return null === $expedition
            || ! isset($expedition->nfnWorkflow)
            || null === $expedition->nfnWorkflow->workflow
            || null === $expedition->nfnWorkflow->project
            || $expedition->actorNfn->completed === 1;
    }

    /**
     * Update expedition stats.
     *
     * @param ExpeditionContract $expeditionContract
     * @param $expedition
     */
    private function updateExpeditionStats(ExpeditionContract $expeditionContract, $expedition)
    {
        // Update stats
        $count = $expeditionContract->setCacheLifetime(0)->getExpeditionSubjectCounts($expedition->id);
        $expedition->stat->subject_count = $count;
        $expedition->stat->transcriptions_total = transcriptions_total($count);
        $expedition->stat->transcriptions_completed = transcriptions_completed($expedition->id);
        $expedition->stat->percent_completed = transcriptions_percent_completed($expedition->stat->transcriptions_total, $expedition->stat->transcriptions_completed);
        $expedition->stat->save();
    }
}
