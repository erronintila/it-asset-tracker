<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $models = [
            "users",
            "departments",
            "suppliers",
            "employees",
            "customers",
            "manufacturers",
            "activity logs",
            "settings",
            "authentication",
            "checkin requests",
            "checkout requests",
            "disposal requests",
            "work orders",
        ];

        foreach ($models as $model) {

            if ($model == "activity logs") {
                Permission::create(['name' => 'export ' . $model, 'category' => $model]);
                Permission::create(['name' => 'delete ' . $model, 'category' => $model]);
                Permission::create(['name' => 'view all ' . $model, 'category' => $model]);
                continue;
            }

            if ($model == "settings") {
                Permission::create(['name' => 'manage ' . $model, 'category' => $model]);
                continue;
            }

            if ($model == "authentication") {
                // Permission::create(['name' => 'login application', 'category' => $model]);
                continue;
            }

            Permission::create(['name' => 'add ' . $model, 'category' => $model]);
            Permission::create(['name' => 'edit ' . $model, 'category' => $model]);
            Permission::create(['name' => 'delete ' . $model, 'category' => $model]);
            Permission::create(['name' => 'view ' . $model, 'category' => $model]);
            Permission::create(['name' => 'view all ' . $model, 'category' => $model]);
            Permission::create(['name' => 'export ' . $model, 'category' => $model]);

            if ($model == "users") {
                // Permission::create(['name' => 'verify users', 'category' => $model]);
                Permission::create(['name' => 'reset user passwords', 'category' => $model]);
                Permission::create(['name' => 'restore users', 'category' => $model]);
                Permission::create(['name' => 'edit permissions', 'category' => $model]);
                Permission::create(['name' => 'set user activation', 'category' => $model]);
            }

            if ($model == "suppliers") {
                Permission::create(['name' => 'restore vendors', 'category' => $model]);
                Permission::create(['name' => 'set vendor activation', 'category' => $model]);
            }

            if ($model == "manufacturers") {
                Permission::create(['name' => 'restore manufacturers', 'category' => $model]);
                Permission::create(['name' => 'set manufacturer activation', 'category' => $model]);
            }

            if ($model == "customers") {
                Permission::create(['name' => 'restore customers', 'category' => $model]);
                Permission::create(['name' => 'set customer activation', 'category' => $model]);
            }
        }
    }
}
