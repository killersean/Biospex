<?php

namespace App\Repositories\Eloquent;

use App\Models\NfnWorkflow as Model;
use App\Repositories\Interfaces\NfnWorkflow;

class NfnWorkflowRepository extends EloquentRepository implements NfnWorkflow
{

    /**
     * Specify Model class name
     *
     * @return \Illuminate\Database\Eloquent\Model|string
     */
    public function model()
    {
        return Model::class;
    }

}