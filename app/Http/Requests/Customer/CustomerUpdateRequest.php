<?php

namespace App\Http\Requests\Customer;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CustomerUpdateRequest extends FormRequest
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
            "code" => ['nullable', 'string', 'max:250', Rule::unique('customers', 'code')->ignore($this->profile_id)],
            "slug" => ['nullable', 'string', 'max:250', Rule::unique('customers', 'slug')->ignore($this->profile_id)],
            "name" => ['required', 'string', 'max:250', Rule::unique('customers', 'name')->ignore($this->profile_id)],
            "contact_person" => ['nullable', 'string', 'max:250'],
            "phone1" => ['nullable', 'string', 'max:30'],
            "phone2" => ['nullable', 'string', 'max:30'],
            "email" => ['nullable', 'email', 'max:250'],
            "website" => ['nullable', 'string', 'max:250'],
            "fax" => ['nullable', 'string', 'max:30'],
            "address" => ['required', 'string', 'max:250'],
            "street" => ['nullable', 'string', 'max:250'],
            "district" => ['nullable', 'string', 'max:250'],
            "city" => ['required', 'string', 'max:250'],
            "province" => ['required', 'string', 'max:250'],
            "country" => ['required', 'string', 'max:250'],
            "postal_code" => ['required', 'string', 'max:10'],
            'latitude' => ['nullable', 'string', 'max:250'],
            'longitude' => ['nullable', 'string', 'max:250'],
            "organization_type" => ['required', 'string', Rule::in(['walkin', 'private', 'government'])],
            "is_company" => ['required', 'boolean'],
            "is_active" => ['required', 'boolean'],
            "location_id" => ['nullable', 'integer', 'max:20']
        ];
    }
}
