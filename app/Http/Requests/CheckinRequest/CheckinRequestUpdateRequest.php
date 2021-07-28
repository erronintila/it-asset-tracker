<?php

namespace App\Http\Requests\CheckinRequest;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CheckinRequestUpdateRequest extends FormRequest
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
            "code" => ["nullable", "string", "max:250", Rule::unique("transactions", 'code')->ignore($this->asset)],
            "reference_no" => ["nullable", "string", "max:250"],
            "request_date" => ["required", "date"],
            "description" => ["required", "string", "max:250"],

            "transaction_type_id" => ['required', 'integer'],
            "user_id" => ['required', 'integer'],
            "parent_asset_id" => ['required', 'integer'],
            "owner_id" => ['required', 'integer'],
            "assigned_user_id" => ['nullable', 'integer'],
            "assigned_location_id" => ['required', 'integer'],
            "assigned_asset_id" => ['nullable', 'integer'],
        ];
    }
}
