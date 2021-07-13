<?php

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

Route::get('/v1/user', 'AuthController@user'); // Get Current User route

Route::middleware('auth:sanctum')->prefix("v1")->group(function () {

    // Multiple deletion routes
    Route::delete('departments/multiple', 'API\v1\DepartmentController@destroyMany')->name('delete.departments.multiple');
    Route::delete('locations/multiple', 'API\v1\LocationController@destroyMany')->name('delete.locations.multiple');
    Route::delete('manufacturers/multiple', 'API\v1\ManufacturerController@destroyMany')->name('delete.manufacturers.multiple');
    Route::delete('suppliers/multiple', 'API\v1\SupplierController@destroyMany')->name('delete.suppliers.multiple');

    // API Resource routes
    Route::apiResources([
        'agreements' => 'API\v1\AgreementController',
        'assets' => 'API\v1\AssetController',
        'asset_categories' => 'API\v1\AssetCategoryController',
        'asset_models' => 'API\v1\AssetModelController',
        'checkin_requests' => 'API\v1\CheckinRequestController',
        'checkout_requests' => 'API\v1\CheckoutRequestController',
        'customers' => 'API\v1\CustomerController',
        'departments' => 'API\v1\DepartmentController',
        'disposal_requests' => 'API\v1\DisposalRequestController',
        'employees' => 'API\v1\EmployeeController',
        'licenses' => 'API\v1\LicenseController',
        'locations' => 'API\v1\LocationController',
        'manufacturers' => 'API\v1\ManufacturerController',
        'suppliers' => 'API\v1\SupplierController',
        'transactions' => 'API\v1\TransactionController',
        'transaction_types' => 'API\v1\TransactionTypeController',
        'users' => 'API\v1\UserController',
        'user_groups' => 'API\v1\UserGroupController',
        'work_orders' => 'API\v1\WorkOrderController',
    ]);
});
