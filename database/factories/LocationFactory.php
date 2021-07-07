<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Location;
use Faker\Generator as Faker;

$factory->define(Location::class, function (Faker $faker) {
    $code = $faker->unique()->numberBetween(1000, 9000);
    $name = $faker->streetAddress;

    return [
        'code' => $code,
        'name' => $name,
        'slug' => $code . '-' . implode('-', explode(' ', $name)),
        'address' => $faker->address,
        'street' => $faker->streetAddress,
        'district' => $faker->state,
        'city' => $faker->city,
        'province' => $faker->state,
        'country' => $faker->country,
        'district' => $faker->state,
        'postal_code' => $faker->postcode,
        'latitude' => $faker->latitude($min = -90, $max = 90),
        'longitude' => $faker->longitude($min = -180, $max = 180),
    ];
});
