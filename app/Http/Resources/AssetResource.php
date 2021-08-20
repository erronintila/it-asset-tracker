<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AssetResource extends JsonResource
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
            "asset_tag" => $this->asset_tag,
            "serial_no" => $this->serial_no,
            "description" => $this->description,
            "purchased_date" => $this->purchased_date,
            "purchased_cost" => $this->purchased_cost,
            "warranty_start_date" => $this->warranty_start_date,
            "warranty_end_date" => $this->warranty_end_date,
            "received_date" => $this->received_date,
            "received_by" => $this->received_by,
            "sku" => $this->sku,
            "quantity" => $this->quantity,
            "notes" => $this->notes,

            "disposed_at" => $this->created_at,
            "maintained_at" => $this->created_at,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,

            "asset_model" => $this->asset_model,
            "supplier" => $this->supplier,
            "manufacturer" => $this->manufacturer,
            "asset_category" => $this->asset_category,

            "assigned_user" => $this->assigned_user,
            "assigned_location_id" => $this->assigned_location_id,
            "assigned_location" => $this->assigned_location,
            "assigned_asset_id" => $this->assigned_asset_id,

            "status" => $this->status,
        ];
    }
}
