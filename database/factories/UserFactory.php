<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\User;
use Faker\Factory;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    $faker = Factory::create('en_PH');
    $gender = $faker->randomElement(['male', 'female']);

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),

        // 'company' => $faker->company,
        // 'first_name' => $faker->firstName($gender),
        // 'middle_name' => $faker->lastName,
        // 'last_name' => $faker->lastName,
        // 'suffix' => $faker->suffix,
        // 'gender' => $gender,
        // 'birthdate' => $faker->dateTimeThisCentury->format('Y-m-d'),
        // 'business_phone' => $faker->phoneNumber,
        // 'home_phone' => $faker->phoneNumber,
        // 'mobile_phone' => $faker->e164PhoneNumber,
        // 'website' => $faker->domainName,
        // 'fax' => $faker->unixTime($max = 'now') ,
        'username' => $faker->unique()->username,
        // 'job_title' => $faker->jobTitle,
        'type' => $faker->randomElement(['employee', 'customer']),
        // 'is_admin' => false,
        'is_active' => true,
    ];
});
