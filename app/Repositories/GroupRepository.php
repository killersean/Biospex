<?php

namespace App\Repositories;

use App\Repositories\Contracts\Group;
use App\Models\Group as Model;

class GroupRepository extends Repository implements Group
{
    /**
     * Construct a new Group Object
     *
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * Return a specific group by a given name
     * 
     * @param  string $name
     * @return Group
     */
    public function findByName($name)
    {
        return $this->model->findByName($name);
    }
}
