<?php

use Illuminate\Database\Seeder;

class AssetModelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\AssetModel::class, 10)->create();
    }
}
