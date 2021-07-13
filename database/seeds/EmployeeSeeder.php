<?php

use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\Employee::class, 30)->create()->each(function ($employee) {
            $employee->user()->save(factory(\App\Models\User::class)->make());
            // $employee->department()->save(factory(\App\Models\Department::class)->make());
        });
    }
}
