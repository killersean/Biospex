<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExpeditionStat extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'expedition_stats';

    /**
     * Accepted attributes
     *
     * @var array
     */
    protected $fillable = [
        'expedition_id',
        'subject_count',
        'transcriptions_total',
        'transcriptions_completed',
        'percentage_completed',
        'start_date'
    ];

    /**
     * Boot function to add model events
     */
    public static function boot()
    {
        parent::boot();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function expedition()
    {
        return $this->belongsTo(Expedition::class);
    }

}
