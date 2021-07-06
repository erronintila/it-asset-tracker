<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DisposalRequest extends Model
{
    protected $guarded = [];
    
    public function transaction()
    {
        return $this->morphOne('App\Models\Transaction', 'request');
    }
}
