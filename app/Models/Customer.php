<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
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

    /**
     * Get the customer's full name.
     *
     * @return string
     */
    public function getFullNameAttribute()
    {
        return $this->name;
    }
}
