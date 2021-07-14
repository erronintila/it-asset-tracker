<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Employee;
use App\Models\Location;
use Faker\Factory;
use Faker\Generator as Faker;

$factory->define(Employee::class, function (Faker $faker) {
    $faker = Factory::create('en_PH');
    $gender = $faker->randomElement(['male', 'female']);
    $first_name = $faker->unique()->firstName($gender);
    $last_name = $faker->unique()->lastName;
    $code = $faker->unique()->numberBetween(1000, 9000);

    return [
        'code' => $code,
        'slug' => "{$code}-{$first_name}-{$last_name}",
        'first_name' => $first_name,
        'middle_name' => $faker->unique()->lastName,
        'last_name' => $last_name,
        'suffix' => $faker->suffix,
        'gender' => $gender,
        'birthdate' => $faker->dateTimeThisCentury->format('Y-m-d'),
        'business_phone' => $faker->e164PhoneNumber,
        'home_phone' => $faker->e164PhoneNumber,
        'mobile_phone' => $faker->e164PhoneNumber,
        'job_title' => $faker->jobTitle,
        'address' => $faker->address,
        'street' => $faker->streetAddress,
        'district' => $faker->state,
        'city' => $faker->city,
        'province' => $faker->state,
        'country' => 'Philippines',
        'postal_code' => $faker->postcode,
        'latitude' => $faker->latitude($min = -90, $max = 90),
        'longitude' => $faker->longitude($min = -180, $max = 180),
        'is_active' => true,
        'location_id' => factory(App\Models\Location::class)->create()->id,
        'department_id' => $faker->randomElement([1, 2, 3])
        // 'department_id' => factory(App\Models\Department::class)->create()->id,
    ];
});
