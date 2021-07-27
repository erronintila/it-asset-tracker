<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\AssetModel;
use Faker\Generator as Faker;

$factory->define(AssetModel::class, function (Faker $faker) {
    $code = "MOD" . date("YmdHis") . $faker->unique()->numberBetween(1000, 9000);
    $name = "Model " . $faker->unique()->numberBetween(1000, 9000);

    return [
        'code' => $code,
        'slug' => $code . '-' . implode('-', explode(' ', $name)),
        'model_no' => date("YmdHis") . $faker->unique()->numberBetween(1000, 9000),
        'name' => $name,
        'manufacturer_id' => factory(App\Models\Manufacturer::class)->create()->id,
    ];
});
