<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class License extends Model
{
    protected $guarded = [];

    /**
     * Get all of the transactions for the license.
     */
    public function transactions()
    {
        return $this->morphToMany('App\Models\Transaction', 'assetable');
    }
}
