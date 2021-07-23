<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class License extends Model
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

    /**
     * Get all of the transactions for the license.
     */
    public function transactions()
    {
        return $this->morphToMany('App\Models\Transaction', 'assetable');
    }

    public function asset_category()
    {
        return $this->belongsTo(AssetCategory::class);
    }

    public function manufacturer()
    {
        return $this->belongsTo(Manufacturer::class);
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
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
        return $query->where("code", "like", "%$text%")
            ->orWhere("reference_no", "like", "%$text%")
            ->orWhere("serial_no", "like", "%$text%")
            ->orWhere("description", "like", "%$text%");
    }
}
