<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $guarded = [];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['full_name'];

    public function user()
    {
        return $this->morphOne('App\Models\User', 'profile');
    }

    public function location()
    {
        return $this->belongsTo('App\Models\Location');
    }

    public function department()
    {
        return $this->belongsTo('App\Models\Department');
    }

    /**
     * Get the employee's full name.
     *
     * @return string
     */
    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }
}
