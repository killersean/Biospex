<?php

use Illuminate\Console\Command;

class TestAppCommand extends Command
{
    /**
     * The console command name.
     */
    protected $name = 'test:test';

    /**
     * The console command description.
     */
    protected $description = 'Used to test code';
    /**
     * @var \Biospex\Repo\Header\HeaderInterface
     */
    private $headerInterface;

    public function __construct(\Biospex\Repo\Header\HeaderInterface $headerInterface)
    {
        parent::__construct();


        $this->headerInterface = $headerInterface;
    }

    /**
     * Fire queue.
     */
    public function fire()
    {
        $results = $this->headerInterface->all();
        foreach($results as $result) {
            foreach ($result->header['image'] as $key => $value) {
                if ($value == 'id') {
                    echo "unsetting id" . PHP_EOL;
                    unset($result->header['image'][$key]);
                }
                $result->save();
            }
        }

        return;
    }
}
