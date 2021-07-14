<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Customer;
use App\Models\Location;
use Faker\Factory;
use Faker\Generator as Faker;

$factory->define(Customer::class, function (Faker $faker) {
    $faker = Factory::create('en_PH');
    $company = $faker->company;
    $code = $faker->unique()->numberBetween(1000, 9000);

    return [
        'code' => $code,
        'slug' => "{$code}-{$company}",
        'name' => $company,
        'contact_person' => $faker->unique()->name($faker->randomElement(['male', 'female'])),
        'phone1' => $faker->unique()->e164PhoneNumber,
        'phone2' => $faker->unique()->e164PhoneNumber,
        // 'email' => $faker->unique()->safeEmail,
        'website' => $faker->unique()->domainName,
        'fax' => $faker->unique()->numberBetween($min = 100000, $max = 900000),
        'address' => $faker->address,
        'street' => $faker->streetAddress,
        'district' => $faker->state,
        'city' => $faker->city,
        'province' => $faker->state,
        'country' => 'Philippines',
        'postal_code' => $faker->postcode,
        'latitude' => $faker->latitude($min = -90, $max = 90),
        'longitude' => $faker->longitude($min = -180, $max = 180),
        'is_company' => true,
        'organization_type' => $faker->randomElement(['private', 'government']),
        'location_id' => factory(App\Models\Location::class)->create()->id,
    ];
});
