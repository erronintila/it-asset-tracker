<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LocationResource extends JsonResource
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
            "address" => $this->address,
            "street" => $this->street,
            "district" => $this->district,
            "city" => $this->city,
            "province" => $this->province,
            "country" => $this->country,
            "postal_code" => $this->postal_code,
            "latitude" => $this->latitude,
            "longitude" => $this->longitude,
            "is_active" => $this->is_active,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at
        ];
    }
}
