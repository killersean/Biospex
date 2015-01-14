<?php
/**
 * WorkflowManager.php
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

class WorkflowManager extends Eloquent {
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'workflow_manager';

	/**
	 * Do not use timestamps
	 *
	 * @var bool
	 */
	public $timestamps = false;

    protected $fillable = array(
		'expedition_uuid',
        'expedition_id',
		'stopped',
		'error',
        'queue'
    );

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function expedition()
    {
        return $this->belongsTo('Expedition');
    }

	/**
	 * Scope
	 *
	 * @param $query
	 * @param $id
	 * @return mixed
	 */
    public function scopeExpeditionId($query, $id)
    {
        return $query->where('expedition_id', '=', $id);
    }

	/**
	 * Get workflow process by expedition id
	 *
	 * @param $id
	 * @return mixed
	 */
    public function findByExpeditionId($id)
    {
        return $this->expeditionid($id)->first();
    }

	/**
	 * Get all with relationship.
	 *
	 * @param $with
	 * @return \Illuminate\Database\Eloquent\Collection|static[]
	 */
	public function allWith($with)
	{
		return $this->with($with)->get();
	}

}