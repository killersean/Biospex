<?php
/**
 * Properties.php
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

class Property extends Eloquent{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'properties';

	/**
	 * @var array
	 */
	protected $dates = ['deleted_at'];

	/**
	 * @var array
	 */
	protected $fillable = array(
		'qualified',
		'short',
		'namespace'
	);

	/**
	 * Array used by FactoryMuff to create Test objects
	 */
	public static $factory = array(
		'qualified' => 'string',
		'short' => 'string',
		'namespace' => 'string'
	);

	/**
	 * Find by qualified name
	 *
	 * @param $name
	 * @return mixed
	 */
	public function findByQualified($name)
	{
		return $this->where('qualified', '=', $name)->first();
	}

	/**
	 * Find by short name
	 *
	 * @param $name
	 * @return mixed
	 */
	public function findByShort($name)
	{
		return $this->where('short', '=', $name)->first();
	}
}
