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

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['status'];

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
        return $this->morphToMany(Transaction::class, 'assetable');
    }

    public function assigned_transactions()
    {
        return $this->hasMany(Transaction::class, 'assigned_transaction_id');
    }

    public function parent_asset_transactions()
    {
        return $this->hasMany(Transaction::class, 'parent_asset_id');
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

    public function assigned_user()
    {
        return $this->belongsTo(User::class, 'assigned_user_id');
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

    public function last_work_order()
    {
        return $this->belongsTo(Transaction::class, "last_work_order_id");
    }

    public function agreements()
    {
        return $this->hasMany(Agreement::class);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL ACCESSORS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function getStatusAttribute()
    {
        if ($this->disposed_at) {
            return [
                "status" => "Disposed",
                "color" => "red",
                "dark" => true
            ];
        }

        // if ($this->last_work_order_id) {
        //     // if ($this->last_work_order) {
        //     return [
        //         "status" => "In Maintenance",
        //         "color" => "yellow",
        //         "dark" => false
        //     ];
        //     // }
        // }

        if ($this->is_under_maintenance) {
            return [
                "status" => "In Maintenance",
                "color" => "yellow",
                "dark" => false
            ];
        }

        if (!$this->assigned_location_id && !$this->assigned_user_id) {
            return [
                "status" => "Pending",
                "color" => "grey",
                "dark" => true
            ];
        }

        if ($this->assigned_location_id && !$this->assigned_user_id) {
            return [
                "status" => "In Storage",
                "color" => "blue",
                "dark" => true
            ];
        }

        if ($this->assigned_location_id && $this->assigned_user_id) {
            return [
                "status" => "In Use",
                "color" => "green",
                "dark" => true
            ];
        }

        return [
            "status" => "Undefined",
            "color" => "red",
            "dark" => true
        ];
    }

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
