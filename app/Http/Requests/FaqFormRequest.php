<?php

namespace App\Http\Requests;

class FaqFormRequest extends Request
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'faq_category_id' => 'required',
            'question'        => 'required',
            'answer'          => 'required'
        ];
    }
}
