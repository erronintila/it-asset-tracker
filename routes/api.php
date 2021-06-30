<?php

use App\Http\Controllers\API\v1\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/v1/user', 'AuthController@user');

Route::middleware('auth:sanctum')->prefix("v1")->group(function () {
    Route::apiResources([
        'users' => 'API\v1\UserController'
    ]);
});
