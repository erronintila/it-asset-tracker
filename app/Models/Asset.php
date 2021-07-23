<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Asset extends Model
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
     * 
     */
    public function transactions()
    {
        return $this->morphToMany('App\Models\Transaction', 'assetable');
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

    public function manufacturer()
    {
        return $this->belongsTo(Manufacturer::class);
    }

    public function asset_model()
    {
        return $this->belongsTo(AssetModel::class);
    }

    public function asset_category()
    {
        return $this->belongsTo(AssetCategory::class);
    }

    public function assigned_to()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function parent_asset()
    {
        return $this->belongsTo(Asset::class, 'asset_id');
    }

    public function assets()
    {
        return $this->hasMany(Asset::class);
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
            ->orWhere("asset_tag", "like", "%$text%");
    }
}
