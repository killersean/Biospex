<?php
/**
 * SubjectDoc.php
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

use Jenssegers\Mongodb\Model as Eloquent;

class SubjectDoc extends Eloquent {

    /**
     * Redefine connection to use mongodb
     */
    protected $connection = 'mongodb';

    /**
     * Set collection
     */
    protected $collection = 'subjectdocs';

    /**
     * Set primary key
     */
    protected $primaryKey = '_id';

    /**
     * set guarded properties
     */
    protected $guarded = array('_id');

    /**
     * Finds document by unique object id (from media.csv)
     *
     * @param $value
     * @return mixed
     */
    public function findById($value)
    {
        return SubjectDoc::where('id', $value)->get();
    }

    /**
     * Return subjects
     *
     * Represents a relationship but since Jenssegers\Mongodb\Model stores belongsToMany
     * inside the collection document instead of a pivot table, this function is altered.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function subject()
    {
        return $this->belongsTo('Subject', '_id', 'mongo_id')->with('object_id');
    }
}