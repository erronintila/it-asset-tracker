<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
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
            "reference" => $this->reference,
            "request_date" => $this->request_date,
            "description" => $this->description,
            "priority" => $this->priority,
            "transactionable" => $this->transactionable,

            "priority_label" => $this->priority_label,
            "status" => $this->status,

            "transaction_type_id" => $this->transaction_type_id,
            "user" => $this->user,
            "parent_asset_id" => $this->parent_asset_id,
            "owner_id" => $this->owner_id,
            "assigned_user_id" => $this->assigned_user_id,
            "assigned_location_id" => $this->assigned_location_id,
            "assigned_asset_id" => $this->assigned_asset_id,

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
