<?php

namespace App\Http\Requests\Supplier;

use Illuminate\Foundation\Http\FormRequest;

class SupplierStoreRequest extends FormRequest
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
            "code" => ['required', 'string', 'max:250', 'unique:suppliers,code'],
            "slug" => ['required', 'string', 'max:250', 'unique:suppliers,slug'],
            "name" => ['required', 'string', 'max:250', 'unique:suppliers,name'],
            "contact_person" => ['nullable', 'string', 'max:250'],
            "phone1" => ['nullable', 'string', 'max:30'],
            "phone2" => ['nullable', 'string', 'max:30'],
            "email" => ['nullable', 'string', 'max:250'],
            "website" => ['nullable', 'string', 'max:250'],
            "fax" => ['nullable', 'string', 'max:30'],
            "address" => ['required', 'string', 'max:250'],
            "street" => ['nullable', 'string', 'max:250'],
            "district" => ['nullable', 'string', 'max:250'],
            "city" => ['required', 'string', 'max:250'],
            "province" => ['required', 'string', 'max:250'],
            "country" => ['required', 'string', 'max:250'],
            "postal_code" => ['required', 'string', 'max:10'],
            "is_active" => ['required', 'boolean']
        ];
    }
}
