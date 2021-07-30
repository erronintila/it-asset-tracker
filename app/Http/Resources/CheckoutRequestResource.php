<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CheckoutRequestResource extends JsonResource
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
            "request_date" => $this->request_date,
            "description" => $this->description,
            "transactionable" => $this->transactionable,

            "status" => $this->status,

            "transaction_type" => $this->transaction_type,
            "user" => $this->user,
            "parent_asset" => $this->parent_asset,
            "owner" => $this->owner,
            "assigned_user" => $this->assigned_user,
            "assigned_location" => $this->assigned_location,
            "assigned_asset" => $this->assigned_asset,
            "assets" => $this->assets,

            "approved_at" => $this->approved_at,
            "completed_at" => $this->completed_at,
            "posted_at" => $this->posted_at,
            "cancelled_at" => $this->cancelled_at,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at
        ];
    }
}
