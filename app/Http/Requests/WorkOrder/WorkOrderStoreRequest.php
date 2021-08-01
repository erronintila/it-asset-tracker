<?php

namespace App\Http\Requests\WorkOrder;

use Illuminate\Foundation\Http\FormRequest;

class WorkOrderStoreRequest extends FormRequest
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
            "code" => ["nullable", "string", "max:250", "unique:assets,code"],
            "reference_no" => ["nullable", "string", "max:250"],
            "request_date" => ["required", "date"],
            "description" => ["required", "string", "max:250"],
            "incident" => ["required", "string"],
            "diagnosis" => ["required", "string"],
            "action_taken" => ["required", "string"],
            "recommendation" => ["required", "string"],
            "scheduled_start_date" => ["required", "date"],
            "scheduled_end_date" => ["required", "date"],
            "actual_start_date" => ["nullable", "date"],
            "actual_end_date" => ["nullable", "date"],

            "transaction_type_id" => ['required', 'integer'],
            "user_id" => ['nullable', 'integer'],
            "parent_asset_id" => ['required', 'integer'],
            "owner_id" => ['nullable', 'integer'],
            "assigned_user_id" => ['required', 'integer'],
            "assigned_location_id" => ['nullable', 'integer'],
            "assigned_asset_id" => ['nullable', 'integer'],

            "assets" => ['nullable', 'array'],
            "assigned_employees" => ['required', 'array']
        ];
    }

    public function messages()
    {
        return [
            "assigned_user_id.required" => "No assigned user selected.",
            "parent_asset_id.required" => "No asset selected.",
            "assigned_employees.required" => "No employees assigned.",
            "transaction_type_id.required" => "The request type field is required.",
        ];
    }
}
