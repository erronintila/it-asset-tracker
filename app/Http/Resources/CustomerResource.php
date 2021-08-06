<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CustomerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "code" => $this->code,
            "slug" => $this->slug,
            "name" => $this->name,
            "contact_person" => $this->contact_person,
            "phone1" => $this->phone1,
            "phone2" => $this->phone2,
            "email" => $this->email,
            "website" => $this->website,
            "fax" => $this->fax,
            "address" => $this->address,
            "street" => $this->street,
            "district" => $this->district,
            "city" => $this->city,
            "province" => $this->province,
            "country" => $this->country,
            "postal_code" => $this->postal_code,
            "latitude" => $this->longitude,
            "longitude" => $this->latitude,
            "organization_type" => $this->organization_type,
            "is_company" => $this->is_active,
            "is_active" => $this->is_active,
            'can_login' => $this->can_login,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,
            "location" => $this->location
        ];
    }
}
