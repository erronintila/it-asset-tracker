<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FeatureResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return  [
            "id" => $this->id,
            "code" => $this->code,
            "slug" => $this->slug,
            "name" => $this->name,
            "is_active" => $this->is_active,
            "is_required" => $this->is_required,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,
            "review_category_id" => $this->review_category_id,
            "review_category" => $this->review_category,
        ];
    }
}
