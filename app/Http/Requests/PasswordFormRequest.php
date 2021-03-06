<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;

class PasswordFormRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'oldPassword' => 'required_without:admin|min:6',
            'newPassword' => 'required|min:6|confirmed',
            'newPassword_confirmation' => 'required'
        ];
    }
}
