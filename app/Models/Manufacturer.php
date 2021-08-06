<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;

class Manufacturer extends Model
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
    protected static $logName = "manufacturer";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} manufacturer";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        // $role = auth()->user() == null ? "default" : (auth()->user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'section' => 'manufacturers',
                'section_id' => $this->id,
                // 'causer_role' => $role,
                'link' => "manufacturers/{$this->id}"
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
