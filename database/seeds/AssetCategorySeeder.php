<?php

use App\Models\AssetCategory;
use Illuminate\Database\Seeder;

class AssetCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        AssetCategory::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'type' => 'asset',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Personal-Computers',
            'name' => 'Personal Computers'
        ]);

        AssetCategory::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'type' => 'asset',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Components',
            'name' => 'Components'
        ]);

        AssetCategory::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'type' => 'asset',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Accessories',
            'name' => 'Accessories'
        ]);

        AssetCategory::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'type' => 'license',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-System-Software',
            'name' => 'System Software'
        ]);

        AssetCategory::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'type' => 'license',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Graphics-Software',
            'name' => 'Graphics Software'
        ]);
    }
}
