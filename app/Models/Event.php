<?php

namespace App\Models;

use Askedio\SoftCascade\Traits\SoftCascadeTrait;
use Illuminate\Database\Eloquent\Model;
use Spiritix\LadaCache\Database\LadaCacheTrait;

class Event extends Model
{
    use LadaCacheTrait, SoftCascadeTrait;

    /**
     * @inheritDoc
     */
    protected $table = 'events';

    /**
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'start_date',
        'end_date'
    ];

    /**
     * @var array
     */
    protected $casts = [
        'project_id' => 'integer',
        'owner_id' => 'integer',
        'title' => 'string',
        'description' => 'string',
        'contact' => 'string',
        'contact_email' => 'string',
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'timezone' => 'string'
    ];

    /**
     * @inheritDoc
     */
    protected $fillable = [
        'project_id',
        'owner_id',
        'title',
        'description',
        'contact',
        'contact_email',
        'start_date',
        'end_date',
        'timezone'
    ];

    /**
     * Soft delete cascades.
     *
     * @var array
     */
    protected $softCascade = ['event_group','event_user', 'event_transcription'];

    /**
     * Project relationship.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * Owner relationship.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * EventGroup relationship.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function groups()
    {
        return $this->hasMany(EventGroup::class);
    }

    /**
     * Event transcription relationship.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function transcriptions()
    {
        return $this->hasMany(EventTranscription::class);
    }

    /**
     * Set start date attribute.
     *
     * @param $value
     * @return string
     */
    public function setStartDateAttribute($value)
    {
        $this->attributes['start_date'] = $value . ':00';
    }

    /**
     * Set end date attribute.
     *
     * @param $value
     * @return string
     */
    public function setEndDateAttribute($value)
    {
        $this->attributes['end_date'] = $value . ':00';
    }
}
