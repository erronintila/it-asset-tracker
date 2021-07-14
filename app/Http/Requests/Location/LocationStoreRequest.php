<?php

namespace App\Http\Requests\Location;

use Illuminate\Foundation\Http\FormRequest;

class LocationStoreRequest extends FormRequest
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
            'code' => ['nullable', 'string', 'max:250', 'unique:locations,code'],
            'slug' => ['nullable', 'string', 'max:250', 'unique:locations,slug'],
            'name' => ['required', 'string', 'max:250', 'unique:locations,name'],
            'address' => ['required', 'string', 'max:250'],
            'street' => ['nullable', 'string', 'max:250'],
            'district' => ['nullable', 'string', 'max:250'],
            'city' => ['required', 'string', 'max:250'],
            'province' => ['required', 'string', 'max:250'],
            'country' => ['required', 'string', 'max:250'],
            'postal_code' => ['required', 'string', 'max:10'],
            'latitude' => ['nullable', 'string', 'max:250'],
            'longitude' => ['nullable', 'string', 'max:250'],
            'is_active' => ['required', 'boolean'],
            // 'notes' => ['nullable', 'string', 'max:250'],
            'location_id' => ['nullable', 'integer', 'max:20'],
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
            // 'job_id.required_if' => 'The job designation field is required.'
        ];
    }
}
