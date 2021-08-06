<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;

class Location extends Model
{
    use SoftDeletes, LogsActivity;

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
    protected static $logName = "location";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} location";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        // $role = auth()->user() == null ? "default" : (auth()->user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'section' => 'locations',
                'section_id' => $this->id,
                // 'causer_role' => $role,
                'link' => "locations/{$this->id}"
            ],
        ]);
    }

    /*  
    |------------------------------------------------------------------------------------------------------------------------------------
    | RELATIONSHIPS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function assets()
    {
        return $this->hasMany(Asset::class);
    }

    public function assigned_transactions()
    {
        return $this->hasMany(Transaction::class, "assigned_location_id");
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
            ->orWhere("address", "like", "%$text%")
            ->orWhere("street", "like", "%$text%")
            ->orWhere("district", "like", "%$text%")
            ->orWhere("city", "like", "%$text%")
            ->orWhere("province", "like", "%$text%")
            ->orWhere("country", "like", "%$text%")
            ->orWhere("postal_code", "like", "%$text%");
    }
}
