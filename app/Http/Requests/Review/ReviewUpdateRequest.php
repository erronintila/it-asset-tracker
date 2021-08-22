<?php

namespace App\Http\Requests\Review;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ReviewUpdateRequest extends FormRequest
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
            'code' => ['nullable', 'string', 'max:250', Rule::unique('reviews', 'code')->ignore($this->review)],
            "reference_no" => ['nullable', 'string'],
            "date" => ['required', 'date'],
            "description" => ['required', 'string'],
            "remarks" => ['nullable', 'string'],
            "approved_at" => ['nullable'],
            "completed_at" => ['nullable'],
            "posted_at" => ['nullable'],
            "cancelled_at" => ['nullable'],
            "asset_id" => ['required', 'integer'],
            "user_id" => ['required', 'integer'],
        ];
    }
}
