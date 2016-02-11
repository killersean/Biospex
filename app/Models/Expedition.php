<?php namespace Biospex\Models;

use Illuminate\Support\Facades\DB;
use Jenssegers\Eloquent\Model as Eloquent;
use Illuminate\Database\Eloquent\SoftDeletes;
use Biospex\Models\Traits\UuidTrait;

class Expedition extends Eloquent
{
    use SoftDeletes;
    use UuidTrait;

    protected $dates = ['deleted_at'];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'expeditions';

    protected $connection = 'mysql';

    protected $primaryKey = 'id';

    /**
     * Accepted attributes
     *
     * @var array
     */
    protected $fillable = [
        'uuid',
        'project_id',
        'title',
        'description',
        'keywords',
    ];

    /**
     * Boot function to add model events
     */
    public static function boot()
    {
        parent::boot();
    }

    /**
     * Belongs to relationship
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function stat()
    {
        return$this->hasOne(ExpeditionStat::class);
    }

    /**
     * Belongs to many
     * $expedition->subjects()->attach($subject) adds expedition ids in subjects
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function subjects()
    {
        return $this->belongsToMany(Subject::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function workflowManager()
    {
        return $this->hasOne(WorkflowManager::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function downloads()
    {
        return $this->hasMany(Download::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function actors()
    {
        return $this->belongsToMany(Actor::class, 'actor_expedition')
            ->withPivot('id', 'expedition_id', 'actor_id', 'state', 'error', 'queued', 'completed', 'order')
            ->orderBy('order');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function userGridField()
    {
        return $this->hasMany(UserGridField::class);
    }

    /**
     * Find by uuid.
     *
     * @param $uuid
     * @return mixed
     */
    public function findByUuid($uuid)
    {
        return $this->where('uuid', pack('H*', str_replace('-', '', $uuid)))->get();
    }

    /**
     * Set uuid for binary storage.
     *
     * @param $value
     */
    public function setUuidAttribute($value)
    {
        $this->attributes['uuid'] = pack('H*', str_replace('-', '', $value));
    }

    /**
     * Return uuid in normal format.
     *
     * @param $value
     * @return string
     */
    public function getUuidAttribute($value)
    {
        if (is_null($value)) {
            return;
        }

        $uuid = bin2hex($value);

        return substr($uuid, 0, 8) . '-' . substr($uuid, 8, 4) . '-' . substr($uuid, 12, 4) . '-' . substr($uuid, 16, 4) . '-' . substr($uuid, 20);
    }

    /**
     * Get counts attribute
     *
     * @return int
     */
    public function getSubjectsCountAttribute()
    {
        return $this->subjects()->count();
    }

    /**
     * Get all expeditions for user
     * @param $id
     * @return mixed
     */
    public function getAllExpeditions($id)
    {
        return $this->leftJoin('expedition_stats', 'expedition_stats.expedition_id', '=', 'expeditions.id')
            ->leftJoin('downloads', 'downloads.expedition_id', '=', 'expeditions.id')
            ->leftJoin('actor_expedition', 'actor_expedition.expedition_id', '=', 'expeditions.id')
            ->leftJoin('projects', 'projects.id', '=', 'expeditions.project_id')
            ->leftJoin('groups', 'groups.id', '=', 'projects.group_id')
            ->leftJoin('group_user', 'group_user.group_id', '=', 'groups.id')
            ->select(
                'expeditions.id as expedition_id',
                'expeditions.title as expedition_title',
                'expeditions.description as expedition_description',
                'expeditions.created_at as expedition_created_at',
                'expedition_stats.subject_count',
                'expedition_stats.transcriptions_total',
                'expedition_stats.transcriptions_completed',
                'expedition_stats.percent_completed',
                'downloads.id as downloads_id',
                'projects.id as project_id',
                'projects.title as project_title',
                'groups.id as group_id',
                'groups.label as group_label',
                'actor_expedition.id as actor_expedition_id')
            ->where('group_user.user_id', '=', $id)
            ->get();
    }
}
