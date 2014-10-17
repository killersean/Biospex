<?php

/**
 * ServerInfoController.php
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
class ServerInfoController extends BaseController
{

	/**
	 * Constructor
	 */
	public function __construct ()
	{
		$this->beforeFilter('auth');
		$this->beforeFilter('csrf', ['on' => 'post']);
		$this->beforeFilter('guest', ['only' => ['index']]);
		$this->beforeFilter('hasAdminAccess');
	}

	/**
	 * Display php info
	 */
	public function showPhpInfo ()
	{
		echo phpinfo();
	}

	public function showOpCache ()
	{
		require '/media/sf_webs/Work/biospex/vendor/peehaa/opcachegui/bootstrap.php';
		return;
	}

	public function test ()
	{
		$n = 0;
		$x = 5;

		return (ceil($n) % $x === 0) ? ceil($n) : round(($n + $x / 2) / $x) * $x;

		return;
	}
}
