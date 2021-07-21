<?php

namespace App\Http\Requests\AssetCategory;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AssetCategoryUpdateRequest extends FormRequest
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
            "type" => ['required', 'string', 'in:asset,license'],
            "code" => ['nullable', 'string', 'max:250', Rule::unique('departments', 'code')->ignore($this->department)],
            "slug" => ['nullable', 'string', 'max:250', Rule::unique('departments', 'slug')->ignore($this->department)],
            "name" => ['required', 'string', 'max:250', Rule::unique('departments', 'name')->ignore($this->department)],
            "is_active" => ['required', 'boolean'],
            "asset_category_id" => ['nullable', 'integer', 'max:20'],
        ];
    }
}
