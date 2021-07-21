<?php

namespace App\Http\Requests\TransactionType;

use Illuminate\Foundation\Http\FormRequest;

class TransactionTypeStoreRequest extends FormRequest
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
            'code' => ['nullable', 'string', 'max:250', 'unique:transaction_types,code'],
            'slug' => ['nullable', 'string', 'max:250', 'unique:transaction_types,slug'],
            'name' => ['required', 'string', 'max:250', 'unique:transaction_types,name'],
            "action_type" => ['required', 'string', 'in:checkin,checkout,maintenance,disposal'],
            "is_active" => ['required', 'boolean'],
        ];
    }
}
