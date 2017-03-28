<?php

namespace App\Console\Commands;


use App\Jobs\NfnClassificationsFusionTableJob;
use App\Repositories\Contracts\ProjectContract;
use App\Repositories\Contracts\TranscriptionLocationContract;
use App\Services\Google\Bucket;
use App\Services\Google\Drive;
use Illuminate\Console\Command;
use Illuminate\Foundation\Bus\DispatchesJobs;
use App\Services\Google\Table;
use PulkitJalan\Google\Facades\Google;

class TestAppCommand extends Command
{

    use DispatchesJobs;
    public $projectContract;


    /**
     * The console command name.
     */
    protected $signature = 'test:test {ids?}';

    /**
     * The console command description.
     */
    protected $description = 'Used to test code';
    /**
     * @var NfnClassificationsFusionTableJob
     */
    private $job;
    /**
     * @var TranscriptionLocationContract
     */
    private $locationContract;
    /**
     * @var Table
     */
    private $table;
    /**
     * @var Bucket
     */
    private $bucket;
    /**
     * @var Drive
     */
    private $drive;


    /**
     * TestAppCommand constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $service = Google::make('Fusiontables');
        dd($service->template->listTemplate('1Cn8Te7Bbcqla5E9Cki1oS30Zp98Zz3k7YZua6pbm'));
    }

}
