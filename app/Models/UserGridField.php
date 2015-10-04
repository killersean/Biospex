<?php namespace App\Models;

/**
 * UserGridField.php
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

use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\BelongsToUserTrait;
use App\Models\Traits\BelongsToProjectTrait;
use App\Models\Traits\BelongsToExpeditionTrait;

class UserGridField extends Eloquent
{
    use BelongsToUserTrait;
    use BelongsToProjectTrait;
    use BelongsToExpeditionTrait;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'user_grid_fields';

    /**
     * @var array
     */
    protected $fillable = [
        'type',
        'user_id',
        'project_id',
        'expedition_id',
        'fields'
    ];

    public function findByUserProjectExpedition($userId, $projectId, $expeditionId)
    {
        return $this
            ->where('user_id', $userId)
            ->where('project_id', $projectId)
            ->where('expedition_id', $expeditionId)
            ->first();
    }
}