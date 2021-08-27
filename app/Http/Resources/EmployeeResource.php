<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\Permission\Models\Permission;

class EmployeeResource extends JsonResource
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
            'id' => $this->id,
            'code' => $this->code,
            'slug' => $this->slug,
            'first_name' => $this->first_name,
            'middle_name' => $this->middle_name,
            'last_name' => $this->last_name,
            'suffix' => $this->suffix,
            'gender' => $this->gender,
            'birthdate' => $this->birthdate,
            'business_phone' => $this->business_phone,
            'home_phone' => $this->home_phone,
            'mobile_phone' => $this->mobile_phone,
            'job_title' => $this->job_title,
            'address' => $this->address,
            'street' => $this->street,
            'district' => $this->district,
            'city' => $this->city,
            'province' => $this->province,
            'country' => $this->country,
            'postal_code' => $this->postal_code,
            "latitude" => $this->longitude,
            "longitude" => $this->latitude,
            'is_active' => $this->is_active,
            'can_login' => $this->can_login,
            'location' => $this->location,
            'department' => $this->department,
            'user' => $this->user,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,
        ];
    }
}
