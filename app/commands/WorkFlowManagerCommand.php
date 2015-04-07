<?php
/**
 * Workflow.php
 *
 * @package    Biospex Package
 * @version    1.0
 * @author     Robert Bruhn <bruhnrp@gmail.com>
 * @license    GNU General Public License, version 3
 * @copyright  (c) 2014, Biospex
 * @link       http://biospex.org
 *
 * This file is part of Biospex.
 * Biospex is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Biospex is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Biospex.  If not, see <http://www.gnu.org/licenses/>.
 */
use Illuminate\Console\Command;
use Biospex\Repo\WorkflowManager\WorkflowManagerInterface;

class WorkFlowManagerCommand extends Command {
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'workflow:manage';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Workflow manager";

	/**
	 * Class constructor
	 *
	 * @param WorkflowManagerInterface $manager
	 * @param ActorInterface $actor
	 * @param Report $report
	 */
    public function __construct(WorkflowManagerInterface $manager)
    {
        $this->manager = $manager;
		$this->queue = \Config::get('config.beanstalkd.workflowManager');

        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function fire()
    {
        $managers = $this->manager->allWith(['expedition.actors']);

        if (empty($managers))
            return;

        foreach ($managers as $manager)
		{
			if ($this->checkProcess($manager))
				continue;

			Queue::push('Biospex\Services\Queue\WorkflowManagerService', ['id' => $manager->id], $this->queue);

			$manager->queue = 1;
			$manager->save();
		}
    }

	/**
	 * @param $manager
	 * @return bool
	 */
	public function checkProcess ($manager)
	{
        if ($manager->stopped == 1 || $manager->error == 1 || $manager->queue == 1)
            return true;

        return false;
	}
}

