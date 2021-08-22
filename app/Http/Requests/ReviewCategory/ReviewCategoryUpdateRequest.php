<?php

namespace App\Http\Requests\ReviewCategory;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ReviewCategoryUpdateRequest extends FormRequest
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
            'code' => ['nullable', 'string', 'max:250', Rule::unique('review_categories', 'code')->ignore($this->review_category)],
            'slug' => ['nullable', 'string', 'max:250', Rule::unique('review_categories', 'slug')->ignore($this->review_category)],
            'name' => ['required', 'string', 'max:250', Rule::unique('review_categories', 'name')->ignore($this->review_category)],
            "is_active" => ['required', 'boolean']
        ];
    }
}
