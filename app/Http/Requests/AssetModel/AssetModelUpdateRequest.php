<?php

namespace App\Http\Requests\AssetModel;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AssetModelUpdateRequest extends FormRequest
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
            'code' => ['nullable', 'string', 'max:250', Rule::unique('asset_models', 'code')->ignore($this->asset_model)],
            'slug' => ['nullable', 'string', 'max:250', Rule::unique('asset_models', 'slug')->ignore($this->asset_model)],
            'name' => ['required', 'string', 'max:250', Rule::unique('asset_models', 'name')->ignore($this->asset_model)],
            "model_no" => ['required', 'string', 'max:250'],
            "is_active" => ['required', 'boolean'],
            "manufacturer_id" => ['nullable', 'integer'],
        ];
    }
}
