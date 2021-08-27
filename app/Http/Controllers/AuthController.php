<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function user()
    {
        if (auth()->user()) {
            return new UserResource(auth()->user());
        }

        return auth()->user();
    }
}
