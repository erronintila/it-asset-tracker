<?php

namespace App\Http\Requests\Asset;

use Illuminate\Foundation\Http\FormRequest;

class AssetStoreRequest extends FormRequest
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
            "slug" => ["nullable", "string", "max:250", "unique:assets,slug"],
            "reference_no" => ["nullable", "string", "max:250"],
            "asset_tag" => ["nullable", "string", "max:250", "unique:assets,asset_tag"],
            "serial_no" => ["nullable", "string", "max:250"],
            "description" => ["required", "string", "max:250"],
            "purchased_date" => ["nullable", "date"],
            "purchased_cost" => ["nullable", "integer"],
            "warranty_start_date" => ["nullable", "date"],
            "warranty_end_date" => ["nullable", "date"],
            "received_date" => ["nullable", "date"],
            "received_by" => ["nullable", "string", "max:250"],
            "sku" => ["nullable", "string", "max:250"],
            "quantity" => ["nullable", "integer"],
            "notes" => ["nullable", "string"],

            "asset_model_id" => ["nullable", "integer"],
            "supplier_id" => ["nullable", "integer"],
            "manufacturer_id" => ["required", "integer"],
            "asset_category_id" => ["required", "integer"],

            "assigned_user_id" => ["nullable", "integer"],
            "assigned_location_id" => ["nullable", "integer"],
            "assigned_asset_id" => ["nullable", "integer"],

            // "extra_attributes" => ["nullable", "array"]
        ];
    }
}
