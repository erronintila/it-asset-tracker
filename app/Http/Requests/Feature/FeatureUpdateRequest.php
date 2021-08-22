<?php

namespace App\Http\Requests\Feature;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FeatureUpdateRequest extends FormRequest
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
            'code' => ['nullable', 'string', 'max:250', Rule::unique('features', 'code')->ignore($this->location)],
            'slug' => ['nullable', 'string', 'max:250', Rule::unique('features', 'slug')->ignore($this->location)],
            'name' => ['required', 'string', 'max:250', Rule::unique('features', 'name')->ignore($this->location)],
            "is_active" => ['required', 'boolean'],
            "is_required" => ['required', 'boolean'],
            "review_category_id" =>  ['required', 'integer'],
        ];
    }
}
