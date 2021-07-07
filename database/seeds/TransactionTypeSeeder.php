<?php

use App\Models\TransactionType;
use Illuminate\Database\Seeder;

class TransactionTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        TransactionType::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'action_type' => 'checkin',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Checkin',
            'name' => 'Checkin'
        ]);

        TransactionType::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'action_type' => 'checkin',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Pull-out',
            'name' => 'Pull-out'
        ]);

        TransactionType::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'action_type' => 'checkout',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Checkout',
            'name' => 'Checkout'
        ]);

        TransactionType::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'action_type' => 'maintenance',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Installation',
            'name' => 'Installation'
        ]);

        TransactionType::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'action_type' => 'maintenance',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Repair',
            'name' => 'Repair'
        ]);

        TransactionType::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'action_type' => 'maintenance',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Preventive-Maintenance',
            'name' => 'Preventive Maintenance'
        ]);

        TransactionType::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'action_type' => 'maintenance',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Corrective-Maintenance',
            'name' => 'Corrective Maintenance'
        ]);

        TransactionType::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'action_type' => 'disposal',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Disposal',
            'name' => 'Disposal'
        ]);

        TransactionType::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'action_type' => 'disposal',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Retired',
            'name' => 'Retired'
        ]);

        TransactionType::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'action_type' => 'disposal',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Missing',
            'name' => 'Missing'
        ]);

        TransactionType::create([
            'code' => $faker->unique()->numberBetween(1000, 9000),
            'action_type' => 'disposal',
            'slug' => $faker->unique()->numberBetween(1000, 9000) . '-Recycled',
            'name' => 'Recycled'
        ]);
    }
}
