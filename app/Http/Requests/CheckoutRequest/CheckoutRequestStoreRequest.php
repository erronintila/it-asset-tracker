<?php

namespace App\Http\Requests\CheckoutRequest;

use Illuminate\Foundation\Http\FormRequest;

class CheckoutRequestStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "code" => ["nullable", "string", "max:250", "unique:assets,code"],
            "reference_no" => ["nullable", "string", "max:250"],
            "request_date" => ["required", "date"],
            "description" => ["required", "string", "max:250"],

            "transaction_type_id" => ['required', 'integer'],
            "user_id" => ['nullable', 'integer'],
            "parent_asset_id" => ['nullable', 'integer'],
            "owner_id" => ['nullable', 'integer'],
            "assigned_user_id" => ['nullable', 'integer'],
            "assigned_location_id" => ['required', 'integer'],
            "assigned_asset_id" => ['nullable', 'integer'],

            "assets" => ['required', 'array']
        ];
    }

    public function messages()
    {
        return [
            "assigned_location_id.required" => "The location field is required.",
            "transaction_type_id.required" => "The request type field is required.",
            "assets.required" => "No asset(s) included."
        ];
    }
}
