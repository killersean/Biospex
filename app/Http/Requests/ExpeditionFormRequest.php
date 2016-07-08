<?php

namespace App\Http\Requests;

use Config;
use Illuminate\Support\Facades\Auth;

class ExpeditionFormRequest extends Request
{
    public function authorize()
    {
        return Auth::check();
    }

    public function rules()
    {
        $rules = [
            'title' => 'required|between:6,140|unique:expeditions,title,' . $this->route('expeditions'),
            'description' => 'required|between:6,140',
            'keywords' => 'required',
            'subjectCount' => 'integer|max:' . Config::get('config.expedition_size')
        ];

        return $rules;
    }
}
