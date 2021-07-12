<?php

namespace App\Http\Requests\Location;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class LocationUpdateRequest extends FormRequest
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
            'code' => ['nullable', 'string', 'max:250', Rule::unique('locations', 'code')->ignore($this->location)],
            'slug' => ['nullable', 'string', 'max:250', Rule::unique('locations', 'slug')->ignore($this->location)],
            'name' => ['required', 'string', 'max:250', Rule::unique('locations', 'name')->ignore($this->location)],
            'address' => ['required', 'string', 'max:250'],
            'street' => ['nullable', 'string', 'max:250'],
            'district' => ['nullable', 'string', 'max:250'],
            'city' => ['required', 'string', 'max:250'],
            'province' => ['required', 'string', 'max:250'],
            'country' => ['required', 'string', 'max:250'],
            'postal_code' => ['required', 'string', 'max:10'],
            'latitude' => ['required', 'string', 'max:250'],
            'longitude' => ['required', 'string', 'max:250'],
            'is_active' => ['required', 'boolean'],
            // 'notes' => ['nullable', 'string', 'max:250'],
            'location_id' => ['nullable', 'integer', 'max:20'],
        ];
    }
}
