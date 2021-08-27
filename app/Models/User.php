<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable, HasRoles, SoftDeletes, LogsActivity;

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL MODEL CONFIGURATION
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /**
     * The attributes that are not mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'is_admin' => 'boolean',
        'is_active' => 'boolean',
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['full_name'];

    protected $with = ['profile'];

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
    protected static $logName = "user";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} user";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        // $role = auth()->user() == null ? "default" : (auth()->user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'section' => 'users',
                'section_id' => $this->id,
                // 'causer_role' => $role,
                'link' => "users/{$this->id}"
            ],
        ]);
    }


    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | RELATIONSHIPS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function profile()
    {
        return $this->morphTo();
    }

    public function assets()
    {
        return $this->hasMany(Asset::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function employee_transactions()
    {
        return $this->belongsToMany(Transaction::class, "transaction_user");
    }

    public function assigned_transactions()
    {
        return $this->hasMany(Transaction::class, "assigned_user_id");
    }

    public function owned_transactions()
    {
        return $this->hasMany(Transaction::class, "owner_id");
    }

    public function agreements()
    {
        return $this->hasMany(Agreement::class, "customer_id");
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL ACCESSORS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /**
     * Get the user's full name.
     *
     * @return string
     */
    public function getFullNameAttribute()
    {
        return ($this->profile) ? $this->profile->full_name : $this->name;
    }

    // public function getPermissionsAttribute()
    // {
    //     return $this->getAllPermissions();
    // }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | CUSTOM
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function scopeSearch($query, $text)
    {
        return $query->where("name", "like", "%$text%")
            ->orWhere("username", "like", "%$text%")
            ->orWhere("email", "like", "%$text%");
        // ->orWhere("address", "like", "%$text%")
        // ->orWhere("street", "like", "%$text%")
        // ->orWhere("district", "like", "%$text%")
        // ->orWhere("city", "like", "%$text%")
        // ->orWhere("province", "like", "%$text%")
        // ->orWhere("country", "like", "%$text%")
        // ->orWhere("postal_code", "like", "%$text%");
    }
}
