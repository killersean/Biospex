<?php

namespace App\Repositories\MongoDb;

use App\Repositories\Repository;
use Jenssegers\Mongodb\Eloquent\Model as MongodbModel;

abstract class MongoDbRepository extends Repository
{

    /**
     * @throws \Exception
     */
    public function makeModel()
    {
        $this->model = $this->app->make($this->model());

        if ( ! $this->model instanceof MongodbModel)
            throw new \Exception("Class {$this->model()} must be an instance of Jenssegers\\Mongodb\\Eloquent\\Model");

        return;
    }
}