<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class FaqCategory extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'faq_categories';

    protected $fillable = [
        'name',
        'label'
    ];

    /**
     * Faq relationship.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function faqs()
    {
        return $this->hasMany(Faq::class);
    }
    
    /**
     * Set name attribute.
     *
     * @param  string  $value
     * @return string
     */
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = strtolower(str_replace(' ', '-', $value));
    }

    /**
     * Set label attribute.
     *
     * @param  string  $value
     * @return string
     */
    public function setLabelAttribute($value)
    {
        $this->attributes['label'] = ucwords($value);
    }
}