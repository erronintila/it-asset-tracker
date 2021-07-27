<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\License;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(License::class, function (Faker $faker) {
    $code = "LIC" . date("YmdHis") . $faker->unique()->numberBetween(1000, 9000);
    $description = "License " . $faker->unique()->numberBetween(1000, 9000);

    return [
        "code" => $code,
        'slug' => $code . '-' . implode('-', explode(' ', $description)),
        "reference_no" => $faker->unique()->numberBetween(1000, 9000),
        "serial_no" => $faker->unique()->numberBetween(1000, 9000),
        "description" => $description,
        "purchased_date" => Carbon::now()->subYear(1),
        "purchased_cost" => $faker->numberBetween(1000, 9000),
        "warranty_start_date" => Carbon::now()->subYear(1),
        "warranty_end_date" => Carbon::now()->addYear(3),

        'supplier_id' => factory(App\Models\Supplier::class)->create()->id,
        'manufacturer_id' => factory(App\Models\Manufacturer::class)->create()->id,
        "asset_category_id" => round($faker->numberBetween(1, 5))
    ];
});
