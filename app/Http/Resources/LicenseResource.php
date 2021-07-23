<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LicenseResource extends JsonResource
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
            "reference_no" => $this->reference_no,
            "serial_no" => $this->serial_no,
            "description" => $this->description,

            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,

            "supplier_id" => $this->supplier_id,
            "manufacturer_id" => $this->manufacturer_id,
            "asset_category_id" => $this->asset_category_id,
        ];
    }
}
