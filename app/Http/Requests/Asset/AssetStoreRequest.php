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
            "purchased_date" => ["nullable", "string", "max:250"],
            "purchased_cost" => ["nullable", "integer", "max:250"],
            "warranty_start_date" => ["nullable", "string", "max:250"],
            "warranty_end_date" => ["nullable", "string", "max:250"],
            "sku" => ["nullable", "string", "max:250"],
            "quantity" => ["nullable", "integer", "max:250"],
            "notes" => ["nullable", "string"],
            "asset_model_id" => ["nullable", "integer"],
            "supplier_id" => ["nullable", "integer"],
            "manufacturer_id" => ["required", "integer"],
            "asset_category_id" => ["required", "integer"],
            "assigned_to" => ["nullable", "integer"],
            "location_id" => ["nullable", "integer"],
            "asset_id" => ["nullable", "integer"],
        ];
    }
}
