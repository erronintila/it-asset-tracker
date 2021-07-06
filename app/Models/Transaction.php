<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $guarded = [];

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
}
