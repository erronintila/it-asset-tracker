<?php

namespace App\Http\Requests\License;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class LicenseUpdateRequest extends FormRequest
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
            'code' => ['nullable', 'string', 'max:250', Rule::unique('licenses', 'code')->ignore($this->license)],
            'slug' => ['nullable', 'string', 'max:250', Rule::unique('licenses', 'slug')->ignore($this->license)],
            "reference_no" => ['nullable', 'string', 'max:250'],
            "serial_no" => ['nullable', 'string', 'max:250'],
            "description" => ['required', 'string', 'max:250'],
            "purchased_date" => ["nullable", "string", "max:250"],
            "purchased_cost" => ["nullable", "integer"],
            "warranty_start_date" => ["nullable", "string", "max:250"],
            "warranty_end_date" => ["nullable", "string", "max:250"],
            "supplier_id" => ['nullable', 'integer'],
            "manufacturer_id" => ['nullable', 'integer'],
            "asset_category_id" => ['required', 'integer'],
        ];
    }
}
