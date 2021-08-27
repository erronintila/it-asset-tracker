<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Transaction extends Model implements HasMedia
{
    use SoftDeletes, LogsActivity, InteractsWithMedia;

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL MODEL CONFIGURATION
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    protected $guarded = [];

    // protected $with = ['request'];

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

    /**
     * Activity Logs Configuration
     */

    // // log changes to all the $fillable/$guarded attributes of the model
    protected static $logUnguarded = true;
    // protected static $logFillable = true;

    // // log the changed attributes for all events
    protected static $logAttributes = ['*'];

    // // Ignoring attributes from logging
    protected static $logAttributesToIgnore = ['updated_at'];

    // // only created and updated event will be logged
    // protected static $recordEvents = ['created', 'updated']

    // // logging only the changed attributes
    protected static $logOnlyDirty = true;

    // // prevents the package from storing empty logs
    // protected static $submitEmptyLogs = false;

    // // customizing the log name
    protected static $logName = "transaction";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} transaction";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        // $role = auth()->user() == null ? "default" : (auth()->user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'section' => 'transactions',
                'section_id' => $this->id,
                // 'causer_role' => $role,
                'link' => "transactions/{$this->id}"
            ],
        ]);
    }

    /*  
    |------------------------------------------------------------------------------------------------------------------------------------
    | RELATIONSHIPS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function transactionable()
    {
        return $this->morphTo();
    }

    /**
     * Get all of the licenses that are assigned this transaction.
     */
    public function licenses()
    {
        return $this->morphedByMany(License::class, 'assetable');
    }

    /**
     * Get all of the assets that are assigned this transaction.
     */
    public function assets()
    {
        return $this->morphedByMany(Asset::class, 'assetable');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function assigned_employees()
    {
        return $this->belongsToMany(User::class, "transaction_user");
    }

    public function transaction_type()
    {
        return $this->belongsTo(TransactionType::class);
    }

    public function owner()
    {
        return $this->belongsTo(User::class, "owner_id");
    }

    public function parent_asset()
    {
        return $this->belongsTo(Asset::class, "parent_asset_id");
    }

    public function assigned_location()
    {
        return $this->belongsTo(Location::class, "assigned_location_id");
    }

    public function assigned_asset()
    {
        return $this->belongsTo(Asset::class, "assigned_asset_id");
    }

    public function assigned_user()
    {
        return $this->belongsTo(User::class, "assigned_user_id");
    }

    public function last_work_order_assets()
    {
        return $this->hasMany(Asset::class, "last_work_order_id");
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL ACCESSORS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function getStatusAttribute()
    {
        if ($this->deleted_at) {
            return [
                "text" => "Deleted",
                "color" => "red",
                "dark" => true
            ];
        }

        if ($this->cancelled_at) {
            return [
                "text" => "Cancelled",
                "color" => "red",
                "dark" => true
            ];
        }

        if ($this->posted_at) {
            return [
                "text" => "Posted",
                "color" => "green",
                "dark" => true
            ];
        }

        if ($this->completed_at) {
            return [
                "text" => "Completed",
                "color" => "yellow",
                "dark" => false
            ];
        }

        if ($this->approved_at) {
            return [
                "text" => "Approved",
                "color" => "blue",
                "dark" => true
            ];
        }

        if (!$this->deleted_at && !$this->cancelled_at && !$this->posted_at && !$this->completed_at && !$this->approved_at) {
            return [
                "text" => "Pending",
                "color" => "grey",
                "dark" => true
            ];
        }

        return [
            "text" => "Undefined",
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
            ->orWhere("description", "like", "%$text%");
    }
}
