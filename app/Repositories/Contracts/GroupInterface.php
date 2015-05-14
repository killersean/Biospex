<?php namespace Biospex\Repositories\Contracts;
/**
 * GroupInterface.php
 *
 * @package    Biospex Package
 * @version    1.0
 * @author     Robert Bruhn <79e6ef82@opayq.com>
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

interface GroupInterface extends RepositoryInterface {

	/**
	 * Return a specific user by a given name
	 * 
	 * @param  string $name
	 * @return User
	 */
	public function byName($name);

	/**
	 * Return groups as list for select options
	 *
	 * @param $allGroups
	 * @param $create
	 * @return mixed
	 */
	public function selectOptions ($allGroups, $create = false);

    /**
     * Find all groups. Using this instead of Sentry all groups due to orderby requirements
     * and the different array structure returned by Sentry when admin or regular user.
     *
	 * @param array $allGroups
     * @return mixed
     */
	public function findAllGroupsWithProjects ($allGroups = array());

	/**
	 * Find all groups
	 *
	 * @return mixed
	 */
	public function findAllGroups ();

}
