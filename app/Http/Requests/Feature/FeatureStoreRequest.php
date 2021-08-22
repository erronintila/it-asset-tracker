<?php

namespace App\Http\Requests\Feature;

use Illuminate\Foundation\Http\FormRequest;

class FeatureStoreRequest extends FormRequest
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
            'code' => ['nullable', 'string', 'max:250', 'unique:features,code'],
            'slug' => ['nullable', 'string', 'max:250', 'unique:features,slug'],
            'name' => ['required', 'string', 'max:250', 'unique:features,name'],
            "is_active" => ['required', 'boolean'],
            "is_required" => ['required', 'boolean'],
            "review_category_id" =>  ['required', 'integer'],
        ];
    }
}
