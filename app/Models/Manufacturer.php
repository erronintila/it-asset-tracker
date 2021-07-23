<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Manufacturer extends Model
{
    use SoftDeletes;

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL MODEL CONFIGURATION
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    protected $guarded = [];

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LIBRARY/PACKAGE CONFIGURATION
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /*  
    |------------------------------------------------------------------------------------------------------------------------------------
    | RELATIONSHIPS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function assets()
    {
        return $this->hasMany(Asset::class);
    }

    public function asset_models()
    {
        return $this->hasMany(AssetModel::class);
    }

    public function licenses()
    {
        return $this->hasMany(License::class);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL ACCESSORS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | CUSTOM
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function scopeSearch($query, $text)
    {
        return $query->where("name", "like", "%$text%")
            ->orWhere("code", "like", "%$text%")
            ->orWhere("phone1", "like", "%$text%")
            ->orWhere("phone2", "like", "%$text%")
            ->orWhere("email", "like", "%$text%")
            ->orWhere("website", "like", "%$text%")
            ->orWhere("fax", "like", "%$text%")
            ->orWhere("address", "like", "%$text%")
            ->orWhere("street", "like", "%$text%")
            ->orWhere("district", "like", "%$text%")
            ->orWhere("city", "like", "%$text%")
            ->orWhere("province", "like", "%$text%")
            ->orWhere("country", "like", "%$text%")
            ->orWhere("postal_code", "like", "%$text%");
    }
}
