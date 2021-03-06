<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Jobs\NfnClassificationsCsvCreateJob;

class NfnClassificationsCsvCreate extends Command
{

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'nfn:csvcreate {expeditionIds?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends requests to create Nfn Workflow Classifications CSV files. Argument can be comma separated expeditionIds.';

    /**
     * NfNClassificationsCsvRequests constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $expeditionIds = null ===  $this->argument('expeditionIds') ? [] : explode(',', $this->argument('expeditionIds'));
        NfnClassificationsCsvCreateJob::dispatch($expeditionIds);
    }
}
