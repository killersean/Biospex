<?php 

namespace App\Repositories;

use App\Models\Translation as Model;
use App\Interfaces\Translation;

class TranslationRepository extends EloquentRepository implements Translation
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
