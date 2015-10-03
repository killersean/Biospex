<?php namespace App\Models;

/**
 * Invite.php
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
use App\Models\Traits\BelongsToGroupTrait;

class Invite extends Model
{
    use BelongsToGroupTrait;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'invites';

    protected $fillable = array(
        'group_id',
        'email',
        'code'
    );

    /**
     * Find invite by code
     *
     * @param $code
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function findByCode($code)
    {
        return $this->whereCode($code)->first();
    }

    /**
     * Find duplicate
     *
     * @param $id
     * @param $email
     * @return mixed
     */
    public function checkDuplicate($id, $email)
    {
        return $this->whereGroupId($id)->whereEmail($email)->first();
    }

    /**
     * Retrun invites by group id
     *
     * @param $id
     * @return mixed
     */
    public function findByGroupId($id)
    {
        return $this->whereGroupId($id)->get();
    }
}
