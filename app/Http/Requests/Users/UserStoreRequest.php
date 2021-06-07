<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
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
            'name' => ['string', 'required', 'max:255'],
            'email' => ['email', 'required', 'max:255'],
            'company' => ['string', 'nullable', 'max:255'],
            'first_name' => ['string', 'nullable', 'max:255'],
            'middle_name' => ['string', 'nullable', 'max:255'],
            'last_name' => ['string', 'nullable', 'max:255'],
            'suffix' => ['string', 'nullable', 'max:255'],
            'gender' => ['string', 'nullable', 'in:male,female'],
            'birthdate' => ['date', 'nullable'],
            'business_phone' => ['string', 'nullable', 'max:255'],
            'home_phone' => ['string', 'nullable', 'max:255'],
            'mobile_phone' => ['string', 'nullable', 'max:255'],
            'website' => ['string', 'nullable', 'max:255'],
            'fax' => ['string', 'nullable', 'max:255'],
            'username' => ['string', 'nullable', 'unique:users,username', 'min:4', 'max:255'],
            'job_title' => ['string', 'nullable'],
            'type' => ['string', 'required', 'in:admin,user,customer'],
            'is_admin' => ['boolean', 'required'],
            'is_active' => ['boolean', 'required'],
        ];
    }

    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [
            'job_id.required_if' => 'The job designation field is required.'
        ];
    }
}
