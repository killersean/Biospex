<?php

namespace App\Repositories;

use App\Models\Notice as Model;
use App\Interfaces\Notice;

class NoticeRepository extends EloquentRepository implements Notice
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

    /**
     * @inheritdoc
     */
    public function getEnabledNotices()
    {
        return $this->model->where('enabled', 1)->get();
    }
}
