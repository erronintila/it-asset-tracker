<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Supplier;
use Faker\Generator as Faker;

$factory->define(Supplier::class, function (Faker $faker) {
    $code = $faker->unique()->numberBetween(1000, 9000);
    $company = $faker->unique()->company;

    return [
        'code' => $code,
        'slug' => "{$code}-{$company}",
        'name' => $company,
        'contact_person' => $faker->unique()->name($faker->randomElement(['male', 'female'])),
        'phone1' => $faker->unique()->e164PhoneNumber,
        'phone2' => $faker->unique()->e164PhoneNumber,
        'email' => $faker->unique()->safeEmail,
        'website' => $faker->unique()->domainName,
        'fax' => $faker->unique()->numberBetween($min = 100000, $max = 900000),
        'address' => $faker->address,
        'street' => $faker->streetAddress,
        'district' => $faker->state,
        'city' => $faker->city,
        'province' => $faker->state,
        'country' => $faker->country,
        'postal_code' => $faker->postcode,
    ];
});
