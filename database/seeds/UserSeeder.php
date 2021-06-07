<?php

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Administrator',
            'username' => 'admin',
            'email' => 'admin@admin.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),

            'company' => 'Twin-Circa Marketing',
            'first_name' => null,
            'middle_name' => null,
            'last_name' => null,
            'suffix' => null,
            'gender' => null,
            'birthdate' => null,
            'business_phone' => null,
            'home_phone' => null,
            'mobile_phone' => null,
            'website' => null,
            'fax' => null,
            'username' => 'admin',
            'job_title' => null,
            'type' => 'admin',
            'is_admin' => true,
            'is_active' => true,
        ]);

        factory(\App\Models\User::class, 10)->create();
    }
}
