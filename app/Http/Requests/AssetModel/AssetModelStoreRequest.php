<?php

namespace App\Http\Requests\AssetModel;

use Illuminate\Foundation\Http\FormRequest;

class AssetModelStoreRequest extends FormRequest
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
            'code' => ['nullable', 'string', 'max:250', 'unique:asset_models,code'],
            'slug' => ['nullable', 'string', 'max:250', 'unique:asset_models,slug'],
            'name' => ['required', 'string', 'max:250', 'unique:asset_models,name'],
            "model_no" => ['required', 'string', 'max:250'],
            "is_active" => ['required', 'boolean'],
            "manufacturer_id" => ['nullable', 'integer'],
        ];
    }
}
