<?php namespace Biospex\Commands;

use Biospex\Commands\Command;

class UserLogInCommand extends Command {

    public $request;

    /**
     * Create a new command instance.
     *
     * @param $request
     */
	public function __construct($request)
	{
		$this->request = $request;
	}

}
