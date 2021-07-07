<?php

use App\Models\TransactionType;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(LocationSeeder::class);
        $this->call(DepartmentSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(ManufacturerSeeder::class);
        $this->call(SupplierSeeder::class);
        $this->call(AssetCategorySeeder::class);
        $this->call(TransactionTypeSeeder::class);
        $this->call(EmployeeSeeder::class);
        $this->call(CustomerSeeder::class);
    }
}
