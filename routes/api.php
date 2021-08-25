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

    Route::put('/users/update_password/{id}', 'API\v1\UserController@update_password');
    Route::get('activity_logs', 'API\v1\ActivityLogController@index');

    // Multiple deletion routes
    Route::delete('reviews/multiple', 'API\v1\ReviewController@destroyMany')->name('delete.reviews.multiple');
    Route::delete('review_categories/multiple', 'API\v1\ReviewCategoryController@destroyMany')->name('delete.review_categories.multiple');
    Route::delete('features/multiple', 'API\v1\FeatureController@destroyMany')->name('delete.features.multiple');
    Route::delete('agreements/multiple', 'API\v1\AgreementController@destroyMany')->name('delete.agreements.multiple');
    Route::delete('work_orders/multiple', 'API\v1\WorkOrderController@destroyMany')->name('delete.work_orders.multiple');
    Route::delete('disposal_requests/multiple', 'API\v1\DisposalRequestController@destroyMany')->name('delete.disposal_requests.multiple');
    Route::delete('checkout_requests/multiple', 'API\v1\CheckoutRequestController@destroyMany')->name('delete.checkout_requests.multiple');
    Route::delete('checkin_requests/multiple', 'API\v1\CheckinRequestController@destroyMany')->name('delete.checkin_requests.multiple');
    Route::delete('asset_models/multiple', 'API\v1\AssetModelController@destroyMany')->name('delete.asset_models.multiple');
    Route::delete('assets/multiple', 'API\v1\AssetController@destroyMany')->name('delete.assets.multiple');
    Route::delete('transaction_types/multiple', 'API\v1\TransactionTypeController@destroyMany')->name('delete.transaction_types.multiple');
    Route::delete('asset_categories/multiple', 'API\v1\AssetCategoryController@destroyMany')->name('delete.asset_categories.multiple');
    Route::delete('customers/multiple', 'API\v1\CustomerController@destroyMany')->name('delete.customers.multiple');
    Route::delete('departments/multiple', 'API\v1\DepartmentController@destroyMany')->name('delete.departments.multiple');
    Route::delete('employees/multiple', 'API\v1\EmployeeController@destroyMany')->name('delete.employees.multiple');
    Route::delete('licenses/multiple', 'API\v1\LicenseController@destroyMany')->name('delete.licenses.multiple');
    Route::delete('locations/multiple', 'API\v1\LocationController@destroyMany')->name('delete.locations.multiple');
    Route::delete('manufacturers/multiple', 'API\v1\ManufacturerController@destroyMany')->name('delete.manufacturers.multiple');
    Route::delete('suppliers/multiple', 'API\v1\SupplierController@destroyMany')->name('delete.suppliers.multiple');

    // Multiple restore routes
    Route::put('reviews/restore', 'API\v1\ReviewController@restore')->name('reviews.restore');
    Route::put('review_categories/restore', 'API\v1\ReviewCategoryController@restore')->name('review_categories.restore');
    Route::put('features/restore', 'API\v1\FeatureController@restore')->name('features.restore');
    Route::put('agreements/restore', 'API\v1\AgreementController@restore')->name('agreements.restore');
    Route::put('work_orders/restore', 'API\v1\WorkOrderController@restore')->name('work_orders.restore');
    Route::put('disposal_requests/restore', 'API\v1\DisposalRequestController@restore')->name('disposal_requests.restore');
    Route::put('checkout_requests/restore', 'API\v1\CheckoutRequestController@restore')->name('checkout_requests.restore');
    Route::put('checkin_requests/restore', 'API\v1\CheckinRequestController@restore')->name('checkin_requests.restore');
    Route::put('asset_models/restore', 'API\v1\AssetModelController@restore')->name('asset_models.restore');
    Route::put('assets/restore', 'API\v1\AssetController@restore')->name('assets.restore');
    Route::put('transaction_types/restore', 'API\v1\TransactionTypeController@restore')->name('transaction_types.restore');
    Route::put('asset_categories/restore', 'API\v1\AssetCategoryController@restore')->name('asset_categories.restore');
    Route::put('customers/restore', 'API\v1\CustomerController@restore')->name('customers.restore');
    Route::put('departments/restore', 'API\v1\DepartmentController@restore')->name('departments.restore');
    Route::put('employees/restore', 'API\v1\EmployeeController@restore')->name('employees.restore');
    Route::put('licenses/restore', 'API\v1\LicenseController@restore')->name('licenses.restore');
    Route::put('locations/restore', 'API\v1\LocationController@restore')->name('locations.restore');
    Route::put('manufacturers/restore', 'API\v1\ManufacturerController@restore')->name('manufacturers.restore');
    Route::put('suppliers/restore', 'API\v1\SupplierController@restore')->name('suppliers.restore');

    // Activation routes
    Route::put("transaction_types/activate", 'API\v1\TransactionTypeController@activate')->name("activate.transaction_types");
    Route::put("asset_categories/activate", 'API\v1\AssetCategoryController@activate')->name("activate.asset_categories");
    Route::put("asset_models/activate", 'API\v1\AssetModelController@activate')->name("activate.asset_models");
    Route::put("customers/activate", 'API\v1\CustomerController@activate')->name("activate.customers");
    Route::put("departments/activate", 'API\v1\DepartmentController@activate')->name("activate.departments");
    Route::put("employees/activate", 'API\v1\EmployeeController@activate')->name("activate.employees");
    Route::put("locations/activate", 'API\v1\LocationController@activate')->name("activate.locations");
    Route::put("manufacturers/activate", 'API\v1\ManufacturerController@activate')->name("activate.manufacturers");
    Route::put("suppliers/activate", 'API\v1\SupplierController@activate')->name("activate.suppliers");
    Route::put("review_categories/activate", 'API\v1\ReviewCategoryController@activate')->name("activate.review_categories");

    // Dashboard routes
    Route::get('dashboard', 'API\v1\DashboardController@index');

    // Checkin status routes
    Route::put('/checkin_requests/approve', 'API\v1\CheckinRequestController@approve')->name('approve.checkin_requests');
    Route::put('/checkin_requests/complete', 'API\v1\CheckinRequestController@complete')->name('complete.checkin_requests');
    Route::put('/checkin_requests/post', 'API\v1\CheckinRequestController@post')->name('post.checkin_requests');
    Route::put('/checkin_requests/cancel', 'API\v1\CheckinRequestController@cancel')->name('cancel.checkin_requests');

    // Checkout status routes
    Route::put('/checkout_requests/approve', 'API\v1\CheckoutRequestController@approve')->name('approve.checkout_requests');
    Route::put('/checkout_requests/complete', 'API\v1\CheckoutRequestController@complete')->name('complete.checkout_requests');
    Route::put('/checkout_requests/post', 'API\v1\CheckoutRequestController@post')->name('post.checkout_requests');
    Route::put('/checkout_requests/cancel', 'API\v1\CheckoutRequestController@cancel')->name('cancel.checkout_requests');

    // Disposal status routes
    Route::put('/disposal_requests/approve', 'API\v1\DisposalRequestController@approve')->name('approve.disposal_requests');
    Route::put('/disposal_requests/complete', 'API\v1\DisposalRequestController@complete')->name('complete.disposal_requests');
    Route::put('/disposal_requests/post', 'API\v1\DisposalRequestController@post')->name('post.disposal_requests');
    Route::put('/disposal_requests/cancel', 'API\v1\DisposalRequestController@cancel')->name('cancel.disposal_requests');

    // Work Order status routes
    Route::put('/work_orders/approve', 'API\v1\WorkOrderController@approve')->name('approve.work_orders');
    Route::put('/work_orders/complete', 'API\v1\WorkOrderController@complete')->name('complete.work_orders');
    Route::put('/work_orders/post', 'API\v1\WorkOrderController@post')->name('post.work_orders');
    Route::put('/work_orders/cancel', 'API\v1\WorkOrderController@cancel')->name('cancel.work_orders');

    // Settings route
    Route::get('settings/general', 'API\v1\GeneralSettingController@index')->name('settings.general.index');
    Route::put('settings/general/update', 'API\v1\GeneralSettingController@update')->name('settings.general.update');
    Route::get('settings/print', 'API\v1\PrintSettingController@index')->name('settings.print.index');
    Route::put('settings/print/update', 'API\v1\PrintSettingController@update')->name('settings.print.update');

    // Permissions route
    Route::get('permissions', 'API\v1\PermissionController@index');
    Route::get('permissions/{id}', 'API\v1\PermissionController@show');
    Route::put('permissions/{id}', 'API\v1\PermissionController@update');

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
        'features' => 'API\v1\FeatureController',
        'licenses' => 'API\v1\LicenseController',
        'locations' => 'API\v1\LocationController',
        'manufacturers' => 'API\v1\ManufacturerController',
        'media' => 'API\v1\MediaController',
        'review_categories' => 'API\v1\ReviewCategoryController',
        'reviews' => 'API\v1\ReviewController',
        'suppliers' => 'API\v1\SupplierController',
        'transactions' => 'API\v1\TransactionController',
        'transaction_types' => 'API\v1\TransactionTypeController',
        'users' => 'API\v1\UserController',
        'user_groups' => 'API\v1\UserGroupController',
        'work_orders' => 'API\v1\WorkOrderController',
    ]);
});
