<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AgreementResource extends JsonResource
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
            "description" => $this->description,
            "type" => $this->type,
            "start_date" => $this->start_date,
            "end_date" => $this->end_date,
            "remarks" => $this->remarks,
            "asset" => $this->asset,
            "customer" => $this->customer,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at
        ];
    }
}
