<?php

use Illuminate\Console\Command;
use League\Csv\Reader;
use Biospex\Repo\Project\ProjectInterface;

class TestAppCommand extends Command {

    /**
     * The console command name.
     */
    protected $name = 'test:test';

    /**
     * The console command description.
     */
    protected $description = 'Used to test code';

    public $reader;
    /**
     * @var ProjectInterface
     */
    private $projectInterface;

    public function __construct(ProjectInterface $projectInterface)
    {
        parent::__construct();
        $this->projectInterface = $projectInterface;
    }

    /**
     * Fire queue.
     */
    public function fire()
    {
        $project = $this->projectInterface->findWith(1, ['workflow.actors']);
        foreach($project->workflow->actors as $actor) {
            echo $actor->title . PHP_EOL;
        }
        //$this->processImages();
        //$this->processOccurrences();

        return;
    }

    public function processImages()
    {
        $file = storage_path('images.csv');

        $this->reader = Reader::createFromPath($file);
        $this->reader->setDelimiter(",");

        $header = $this->reader->fetchOne();

        $i = 0;
        foreach ($this->reader->setOffset(1)->fetch() as $row)
        {
            $combined = array_combine($header, $row);

            $subject = Subject::where("project_id", 6)->where('occurrence.id', $combined['coreid'])->first();
            if (empty($subject))
                continue;

            foreach ($combined as $key => $value)
            {
                $subject->{$key} = $value;
            }

            $subject['id'] = $subject['identifier'];
            $subject->save();

            echo "Updating " . $subject['_id'] . PHP_EOL;
            $i++;
        }
        echo "Finished updating $i records" . PHP_EOL;
    }

    public function processOccurrences()
    {
        $file = storage_path('occurrences.csv');

        $this->createReader($file);

        $header = $this->reader->fetchOne();

        $i = 0;
        foreach ($this->reader->setOffset(1)->fetch() as $row)
        {
            $combined = array_combine($header, $row);

            $subjects = Subject::where("project_id", 6)->where('occurrence.id', $combined['id'])->get();
            if (empty($subjects))
                continue;

            foreach ($subjects as $subject) {
                foreach ($combined as $key => $value)
                {
                    $subject->occurrence->{$key} = $value;
                }

                $subject->save();

                echo "Updating " . $subject['_id'] . PHP_EOL;
                $i++;
            }
        }
        echo "Finished updating $i records" . PHP_EOL;
    }

    public function createReader($file)
    {
        $this->reader = Reader::createFromPath($file);
        $this->reader->setDelimiter(",");
    }

}
