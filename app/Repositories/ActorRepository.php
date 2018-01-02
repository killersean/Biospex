<?php

namespace App\Repositories;

use App\Models\Actor as Model;
use App\Models\ActorContact;
use App\Interfaces\Actor;

class ActorRepository extends EloquentRepository implements Actor
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
    public function getAllTrashed()
    {
        $results = $this->model->onlyTrashed()->get();

        $this->resetModel();

        return $results;
    }

    /**
     * @inheritdoc
     */
    public function createActor(array $attributes = [])
    {
        $actor = $this->model->create($attributes);

        foreach ($attributes['contacts'] as $contact)
        {
            if ($contact['email'] !== '')
            {
                $actor->contacts()->create(['email' => $contact['email']]);
            }
        }

        $this->resetModel();

        return $actor;
    }

    /**
     * @inheritdoc
     */
    public function updateActor($id, array $attributes = [])
    {
        $actor = $this->model->with(['contacts'])->find($id);
        $actor->fill($attributes);
        $actor->save();

        $contacts = [];
        $actor->contacts()->delete();
        foreach ($attributes['contacts'] as $contact)
        {
            if ($contact['email'] !== '')
            {
                $contacts[] = new ActorContact(['email' => $contact['email']]);
            }
        }

        $actor->contacts()->saveMany($contacts);

        $actor = $this->model->with(['contacts'])->find($id);

        $this->resetModel();

        return $actor;
    }

    /**
     * @inheritdoc
     */
    public function updateActorExpeditionPivot($actor, $expeditionId, array $attributes = [])
    {
        $result = $actor->expeditions()->updateExistingPivot($expeditionId, $attributes);

        $this->resetModel();

        return $result;
    }
}