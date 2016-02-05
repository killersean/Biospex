<?php namespace Biospex\Models;

/**
 * Download.php
 *
 * @package    Biospex Package
 * @version    2.0
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

use Illuminate\Database\Eloquent\Model;

class Download extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'downloads';

    protected $fillable = [
        'expedition_id',
        'actor_id',
        'file',
        'data',
        'count'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function expedition()
    {
        return $this->belongsTo(Expedition::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function actor()
    {
        return $this->belongsTo(Actor::class);
    }

    /**
     * Get expired downloads
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getExpired()
    {
        return $this->where('count', '>', 5)->orWhere('created_at', '<', DB::raw('NOW() - INTERVAL 7 DAY'))->get();
    }
}
