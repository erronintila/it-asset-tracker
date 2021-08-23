<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
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
            "reference_no" => $this->reference_no,
            "date" => $this->date,
            "description" => $this->description,
            "remarks" => $this->remarks,
            "approved_at" => $this->approved_at,
            "completed_at" => $this->completed_at,
            "posted_at" => $this->posted_at,
            "cancelled_at" => $this->cancelled_at,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,
            "asset_id" => $this->asset_id,
            "asset" => $this->asset,
            "user_id" => $this->user_id,
            "user" => $this->user,
            "review_category_id" => $this->review_category_id,
            "review_category" => $this->review_category,
        ];
    }
}
