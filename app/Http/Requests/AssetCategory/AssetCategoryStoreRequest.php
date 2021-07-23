<?php

namespace App\Http\Requests\AssetCategory;

use Illuminate\Foundation\Http\FormRequest;

class AssetCategoryStoreRequest extends FormRequest
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
            "code" => ['nullable', 'string', 'max:250', 'unique:asset_categories,code'],
            "slug" => ['nullable', 'string', 'max:250', 'unique:asset_categories,slug'],
            "name" => ['required', 'string', 'max:250', 'unique:asset_categories,name'],
            "is_active" => ['required', 'boolean'],
            "asset_category_id" => ['nullable', 'integer'],
        ];
    }
}
