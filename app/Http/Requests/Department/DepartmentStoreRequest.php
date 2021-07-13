<?php

namespace App\Http\Requests\Department;

use Illuminate\Foundation\Http\FormRequest;

class DepartmentStoreRequest extends FormRequest
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
            'code' => ['nullable', 'string', 'max:250', 'unique:departments,code'],
            'slug' => ['nullable', 'string', 'max:250', 'unique:departments,slug'],
            'name' => ['required', 'string', 'max:250', 'unique:departments,name'],
            'is_active' => ['required', 'boolean'],
            'manager_id' => ['nullable', 'integer', 'max:20'],
            'department_id' => ['nullable', 'integer', 'max:20'],
        ];
    }
}
