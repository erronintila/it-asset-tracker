<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('slug');
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('suffix')->nullable();
            $table->enum('gender', ['male', 'female']);
            $table->date("birthdate")->nullable();
            $table->string("business_phone", 30)->nullable();
            $table->string("home_phone", 30)->nullable();
            $table->string("mobile_phone", 30)->nullable();
            $table->string('job_title');
            $table->string("address");
            $table->string("street")->nullable();
            $table->string("district")->nullable();
            $table->string("city");
            $table->string("province");
            $table->string("country");
            $table->string("postal_code", 10);
            $table->string("latitude")->nullable();
            $table->string("longitude")->nullable();
            $table->text("image")->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->softDeletes();
            $table->foreignId('location_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('department_id')->constrained()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
