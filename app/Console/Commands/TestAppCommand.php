<?php

namespace App\Console\Commands;

use App\Repositories\Contracts\SubjectContract;
use Illuminate\Console\Command;
use Illuminate\Foundation\Bus\DispatchesJobs;

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
     * @var SubjectContract
     */
    private $subjectContract;

    /**
     * TestAppCommand constructor.
     */
    public function __construct(SubjectContract $subjectContract)
    {
        parent::__construct();
        $this->subjectContract = $subjectContract;
    }

    /**
     *
     */
    public function handle()
    {
        $subjects = $this->subjectContract->findWhere(['project_id', '=', 55]);
        $subjects->each(function($subject){
            dd($subject);
        });
    }
}