<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;
use MongoDB\BSON\ObjectID;
use MongoDB\BSON\UTCDateTime;

class WeDigBioDashboard extends Model
{
    /**
     * @inheritDoc
     */
    protected $connection = 'mongodb';

    /**
     * Set Collection
     */
    protected $collection = 'wedigbio_dashboard';

    /**
     * @inheritDoc
     */
    protected $primaryKey = '_id';

    /**
     * @inheritDoc
     */
    public $incrementing = false;

    /**
     * @inheritDoc
     */
    protected $guarded = ['_id'];

    /**
     * @inheritDoc
     */
    protected $dates = ['created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function expedition()
    {
        return $this->belongsTo(Expedition::class, 'expedition_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function transcription()
    {
        return $this->belongsTo(PanoptesTranscription::class, 'transcription_id', '_id');
    }

    /**
     * Set expedition_id attribute to integer.
     *
     * @param $value
     */
    public function setExpeditionIdAttribute($value)
    {
        $this->attributes['expedition_id'] = (int) $value;
    }

    /**
     * Set transcript as mongo id.
     *
     * @param $value
     */
    public function setTranscriptionIdAttribute($value)
    {
        if (is_string($value) and strlen($value) === 24 and ctype_xdigit($value)) {
            $this->attributes['transcription_id'] = new ObjectID($value);
        }
    }

    /**
     * Get transcript id.
     *
     * @param $value
     * @return mixed
     */
    public function getTranscriptIdAttribute($value)
    {
        return $this->getIdAttribute($value);
    }

    /**
     * Mutate finished_at date for MongoDb
     *
     * @param  string  $value
     */
    public function setTimestampAttribute($value)
    {
        if ($value instanceof UTCDatetime) {
            $this->attributes['timestamp'] = $value;
        }

        $this->attributes['timestamp'] = new UTCDatetime($this->asTimeStamp($value) * 1000);
    }

    /**
     * Return finished_at in usable format
     *
     * @param  string  $value
     * @return string
     */
    public function getTimestampAttribute($value)
    {
        return $value->toDateTime()->format('Y-m-d\TH:i:s\Z');
    }
}
