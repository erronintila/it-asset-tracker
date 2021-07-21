<?php

namespace App\Http\Requests\TransactionType;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TransactionTypeUpdateRequest extends FormRequest
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
            'code' => ['nullable', 'string', 'max:250', Rule::unique('transaction_types', 'code')->ignore($this->transaction_type)],
            'slug' => ['nullable', 'string', 'max:250', Rule::unique('transaction_types', 'slug')->ignore($this->transaction_type)],
            'name' => ['required', 'string', 'max:250', Rule::unique('transaction_types', 'name')->ignore($this->transaction_type)],
            "action_type" => ['required', 'string', 'in:checkin,checkout,maintenance,disposal'],
            "is_active" => ['required', 'boolean'],
        ];
    }
}
