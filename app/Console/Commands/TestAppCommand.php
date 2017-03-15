<?php

namespace App\Console\Commands;

use App\Repositories\Contracts\AmChartContract;
use App\Repositories\Contracts\PanoptesTranscriptionContract;
use App\Repositories\Contracts\ProjectContract;
use Illuminate\Console\Command;
use Illuminate\Foundation\Bus\DispatchesJobs;
use PulkitJalan\Google\Facades\Google;
use Illuminate\Contracts\Container\Container;

class TestAppCommand extends Command
{

    use DispatchesJobs;

    /**
     * The console command name.
     */
    protected $signature = 'test:test {ids?}';

    /**
     * The console command description.
     */
    protected $description = 'Used to test code';

    /**
     * @var \App\Repositories\Contracts\ExpeditionContract
     */
    private $expeditionContract;
    /**
     * @var \App\Repositories\Contracts\GroupContract
     */
    private $groupContract;
    /**
     * @var \App\Services\Process\PanoptesTranscriptionProcess
     */
    private $panoptesTranscriptionProcess;
    /**
     * @var
     */
    private $job;
    /**
     * @var ProjectContract
     */
    private $projectContract;
    /**
     * @var AmChartContract
     */
    private $amChartContract;
    /**
     * @var PanoptesTranscriptionContract
     */
    private $panoptesTranscriptionContract;


    /**
     * TestAppCommand constructor.
     */
    public function __construct(
        \App\Repositories\Contracts\ProjectContract $projectContract,
        \App\Repositories\Contracts\AmChartContract $amChartContract,
        \App\Repositories\Contracts\PanoptesTranscriptionContract $panoptesTranscriptionContract,
        \App\Repositories\Contracts\ExpeditionContract $expeditionContract,
        \App\Repositories\Contracts\GroupContract $groupContract,
        \App\Services\Process\PanoptesTranscriptionProcess $panoptesTranscriptionProcess,
        \App\Jobs\AmChartJob $job
    )
    {
        parent::__construct();

        $this->expeditionContract = $expeditionContract;
        $this->groupContract = $groupContract;
        $this->panoptesTranscriptionProcess = $panoptesTranscriptionProcess;
        $this->job = $job;
        $this->projectContract = $projectContract;
        $this->amChartContract = $amChartContract;
        $this->panoptesTranscriptionContract = $panoptesTranscriptionContract;
    }

    /**
     *
     */
    public function fire()
    {
        $csvPath = config('config.classifications_download') . '/35.csv';
        $recPath = config('config.classifications_reconcile') . '/35.csv';
        $tranPath = config('config.classifications_transcript') . '/35.csv';
        $sumPath = config('config.classifications_summary') . '/35.html';
        $pythonPath = base_path('label_reconciliations/reconcile.py');
        $command = "sudo python3 $pythonPath -w 2468 -r $recPath -u $tranPath -s $sumPath $csvPath";
        echo $command . PHP_EOL;
    }

    public function getContainer($service = null)
    {
        return is_null($service) ? ($this->container ?: app()) : ($this->container[$service] ?: app($service));
    }

    public function googleTables()
    {
        // returns instance of \Google_Service_Storage
        $fusionTables = Google::make('fusiontables');
        $fusionTables->setScope('fusiontables');

        // list tables example
        dd($fusionTables->table->listTable());
    }
}
