<?php

namespace App\Http\Requests\ReviewCategory;

use Illuminate\Foundation\Http\FormRequest;

class ReviewCategoryStoreRequest extends FormRequest
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
            'code' => ['nullable', 'string', 'max:250', 'unique:review_categories,code'],
            'slug' => ['nullable', 'string', 'max:250', 'unique:review_categories,slug'],
            'name' => ['required', 'string', 'max:250', 'unique:review_categories,name'],
            "is_active" => ['required', 'boolean']
        ];
    }
}
