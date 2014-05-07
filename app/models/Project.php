<?php
/**
 * Project.php
 *
 * @package    Biospex Package
 * @version    1.0
 * @author     Robert Bruhn <79e6ef82@opayq.com>
 * @license    GNU General Public License, version 3
 * @copyright  (c) 2014, Biospex
 * @link       http://biospex.org
 *
 * This file is part of Biospex.
 * Biospex is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Biospex is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Biospex.  If not, see <http://www.gnu.org/licenses/>.
 */
class Project extends Eloquent {
    use Codesleeve\Stapler\Stapler;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'projects';

    /**
     * Allow soft deletes
     */
    protected $softDelete = true;

    /**
     * @var array
     */
    protected $fillable = array(
        'group_id',
        'title',
        'contact',
        'contact_email',
        'managed',
        'description',
        'goal',
        'circumscription',
        'strategy',
        'incentives',
        'geographic_scope',
        'taxonomic_scope',
        'temporal_scope',
        'keywords',
        'hashtag',
        'activities',
        'language_skills',
        'workflow_id',
        'logo',
        'banner',
        'target_fields'
    );

    /**
     * Array used by FactoryMuff to create Test objects
     */
    public static $factory = array(
        'group_id' => 'factory|Group',
        'title' => 'string',
        'contact' => 'string',
        'contact_email' => 'string',
        'managed' => 'string',
        'description' => 'text',
        'goal' => 'text',
        'circumscription' => 'text',
        'strategy' => 'text',
        'incentives' => 'text',
        'geographic_scope' => 'string',
        'taxonomic_scope'  => 'string',
        'temporal_scope' => 'string',
        'keywords' => 'string',
        'hashtag' => 'string',
        'activities' => 'string',
        'language_skills' => 'string',
        'workflow_id' => 'integer',
        'logo' => 'string',
        'banner' => 'string',
        'target_fields' => 'text',
    );

    /**
     * @param array $attributes
     */
    public function __construct(array $attributes = array()) {
        $this->hasAttachedFile('logo', ['styles' => ['normal' => Config::get('config.logo')]]);
        $this->hasAttachedFile('banner', ['styles' => ['normal' => Config::get('config.banner')]]);

        parent::__construct($attributes);
    }

    /**
     * Boot function to add model events
     */
    public static function boot(){
        parent::boot();

        Project::saving(function($model)
        {
            $model->target_fields = Input::all();
        });
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function group()
    {
        return $this->belongsTo('Group', 'group_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function subject()
    {
        return $this->hasMany('Subject');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function expedition()
    {
        return $this->hasMany('Expedition');
    }

    /**
     * Mutator for target_fields
     *
     * @param $input
     */
    public function setTargetFieldsAttribute($input)
    {
        $target_fields = array();

        if (isset($input['targetCount']) && $input['targetCount'] > 0)
        {
            for ($i=0; $i<$input['targetCount']; $i++)
            {
                if (empty($input['target_name'][$i])) continue;

                $fields = array(
                    'target_core'               => $input['target_core'][$i],
                    'target_name'               => $input['target_name'][$i],
                    'target_description'        => $input['target_description'][$i],
                    'target_valid_response'     => $input['target_valid_response'][$i],
                    'target_inference'          => $input['target_inference'][$i],
                    'target_inference_example'  => $input['target_inference_example'][$i],
                );
                $target_fields[$i] = $fields;
            }
        }
        else
        {
            unset($input['target_name']);
            unset($input['target_description']);
            unset($input['target_valid_response']);
            unset($input['target_inference']);
            unset($input['target_inference_example']);
        }
        $this->attributes['target_fields'] = ( ! empty($target_fields)) ? json_encode($target_fields) : '';
    }

    /**
     * Accessor for target_fields
     *
     * @param $value
     * @return mixed
     */
    public function getTargetFieldsAttribute($value)
    {
        return json_decode($value);
    }

    /**
     * Accessor for created_at
     *
     * @param $value
     * @return bool|string
     */
    public function getCreatedAtAttribute($value)
    {
        return date("m/d/Y", strtotime($value));
    }

    /**
     * Accessor updated_at
     *
     * @param $value
     * @return bool|string
     */
    public function getUpdatedAtAttribute($value)
    {
        return date("m/d/Y", strtotime($value));
    }
}
