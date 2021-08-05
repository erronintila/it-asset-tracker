<?php

use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\Customer::class, 30)->create()->each(function ($customer) {
            $customer->user()->save(factory(\App\Models\User::class)->make(["name" => $customer->name, "type" => "customer"]));
        });
    }
}
