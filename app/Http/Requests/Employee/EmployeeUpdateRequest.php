<?php

namespace App\Http\Requests\Employee;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EmployeeUpdateRequest extends FormRequest
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
            "code" => ['nullable', 'string', 'max:250', Rule::unique('employees', 'code')->ignore($this->employee)],
            "slug" => ['nullable', 'string', 'max:250', Rule::unique('employees', 'slug')->ignore($this->employee)],
            'first_name' => ['required', 'string', 'max:250'],
            'middle_name' => ['required', 'string', 'max:250'],
            'last_name' => ['required', 'string', 'max:250'],
            'suffix' => ['required', 'string', 'max:250'],
            'gender' => ['required', 'string', Rule::in(['male', 'female'])],
            'birthdate' => ['required', 'date'],
            'business_phone' => ['nullable', 'string', 'max:30'],
            'home_phone' => ['nullable', 'string', 'max:30'],
            'mobile_phone' => ['nullable', 'string', 'max:30'],
            'job_title' => ['required', 'string', 'max:250'],
            'address' => ['required', 'string', 'max:250'],
            'street' => ['nullable', 'string', 'max:250'],
            'district' => ['nullable', 'string', 'max:250'],
            'city' => ['required', 'string', 'max:250'],
            'province' => ['required', 'string', 'max:250'],
            'country' => ['required', 'string', 'max:250'],
            'postal_code' => ['required', 'string', 'max:10'],
            'is_active' => ['required', 'boolean'],
            'location_id' => ['nullable', 'integer', 'max:20'],
            'department_id' => ['nullable', 'integer', 'max:20'],
        ];
    }
}
