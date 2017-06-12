<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\UuidTrait;

class Download extends Model
{
    use UuidTrait;

    /**
     * @inheritDoc
     */
    protected $table = 'downloads';

    /**
     * @inheritDoc
     */
    protected $fillable = [
        'uuid',
        'expedition_id',
        'actor_id',
        'file',
        'data',
        'count'
    ];

    /**
     * Expedition relationship.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function expedition()
    {
        return $this->belongsTo(Expedition::class);
    }

    /**
     * Actor relationship.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function actor()
    {
        return $this->belongsTo(Actor::class);
    }
}
