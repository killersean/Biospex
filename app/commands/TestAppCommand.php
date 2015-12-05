<?php

use Illuminate\Console\Command;
use League\Csv\Reader;

class TestAppCommand extends Command {

    /**
     * The console command name.
     */
    protected $name = 'test:test';

    /**
     * The console command description.
     */
    protected $description = 'Used to test code';
    /**
     * @var \Biospex\Repo\Subject\SubjectInterface
     */
    private $subjectInterface;


    public function __construct(\Biospex\Repo\Subject\SubjectInterface $subjectInterface)
    {
        parent::__construct();
        $this->subjectInterface = $subjectInterface;
    }

    /**
     * Fire queue.
     */
    public function fire()
    {
        $file = storage_path('images.csv');

        $this->reader = Reader::createFromPath($file);
        $this->reader->setDelimiter(",");

        $header = $this->reader->fetchOne();

        $i = 0;
        foreach ($this->reader->setOffset(1)->fetch() as $row)
        {
            $combined = array_combine($header, $row);

            $result = Subject::where("project_id", 2)->where('occurrence.id', $combined['coreid'])->first();
            if (empty($result))
                continue;

            $result->ocr = "This is a test";
            $result->save();

            $test = Subject::where("project_id", 2)->where('occurrence.id', $combined['coreid'])->first();
            print_r($test);
            exit;

            /*
            $subject = array_merge(json_decode(json_encode($result), true), $combined);
            $subject['id'] = $subject['identifier'];

            $this->subjectInterface->update($subject);

            echo "Updating " . $subject['_id'] . PHP_EOL;
            $i++;
            */
        }

        echo "Finished updating $i records" . PHP_EOL;
        return;
    }

}
