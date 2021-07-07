<?php

use App\Models\Department;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        Department::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'slug' => $faker->unique()->numberBetween(1000, 9000) . "-Information-Technology",
            'name' => 'Information Technology'
        ]);

        Department::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'slug' => $faker->unique()->numberBetween(1000, 9000) . "-Technical-Services",
            'name' => 'Technical Services'
        ]);

        Department::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'slug' => $faker->unique()->numberBetween(1000, 9000) . "-Sales-and-Marketing",
            'name' => 'Sales and Marketing'
        ]);
        // factory(\App\Models\Department::class, 10)->create();
    }
}
