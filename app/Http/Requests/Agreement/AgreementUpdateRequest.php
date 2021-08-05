<?php

namespace App\Http\Requests\Agreement;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AgreementUpdateRequest extends FormRequest
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
            'code' => ['nullable', 'string', 'max:250', Rule::unique('agreements', 'code')->ignore($this->agreement)],
            'slug' => ['nullable', 'string', 'max:250', Rule::unique('agreements', 'slug')->ignore($this->agreement)],
            "reference_no" => ['nullable', 'string', 'max:250'],
            "description" => ['required', 'string', 'max:250'],
            "type" => ['required', 'string', Rule::in(['warranty', 'contract'])],
            "start_date" => ['required', 'date'],
            "end_date" => ['required', 'date'],
            "remarks" => ['nullable', 'string'],
            "asset_id" => ['required', 'integer'],
            "customer_id" => ['required', 'integer'],
        ];
    }

    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [
            'asset_id.required' => 'The asset field is required.',
            'customer_id.required' => 'The customer field is required.'
        ];
    }
}
