<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Repositories\Contracts\Import;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Queue;

class DarwinCoreFileImportCommand extends Command
{
    private $import;
    private $tube;

    /**
     * The console command name.
     *
     * @var string
     */
    protected $signature = 'dwc:import';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Command to re-queue dwc import after a failure.";

    /**
     * DarwinCoreFileImportCommand constructor.
     * 
     * @param Import $import
     */
    public function __construct(Import $import)
    {
        parent::__construct();

        $this->import = $import;
        $this->tube = Config::get('config.beanstalkd.ocr');
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $imports = $this->import->skipCache()->where(['error' => 0])->get();

        $count = 0;
        foreach ($imports as $import) {
            Queue::push('App\Services\Queue\DarwinCoreFileImportQueue', ['id' => $import->id], $this->tube);
            $count++;
        }

        echo $count . " Imports added to Queue." . PHP_EOL;

    }
}
