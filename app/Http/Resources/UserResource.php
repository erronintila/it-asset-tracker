<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\Permission\Models\Permission;

class UserResource extends JsonResource
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
            "type" => $this->type,
            "name" => $this->name,
            "full_name" => $this->full_name,
            "username" => $this->username,
            "email" => $this->email,
            "is_superadmin" => $this->is_superadmin,
            "is_active" => $this->is_active,
            'can_login' => $this->can_login,
            'default' => $this->default,
            "notes" => $this->notes,
            "profile" => $this->profile,
            "permissions" => $this->is_superadmin ? Permission::all()->pluck("name") : $this->getAllPermissions()->pluck('name'),
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,
        ];
    }
}
