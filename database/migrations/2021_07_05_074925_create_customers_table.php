<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('slug');
            $table->string('name');
            $table->string("contact_person")->nullable();
            $table->string("phone1", 30)->nullable();
            $table->string("phone2", 30)->nullable();
            $table->string('website')->nullable();
            $table->string('fax', 30)->nullable();
            $table->string("address");
            $table->string("street")->nullable();
            $table->string("district")->nullable();
            $table->string("city");
            $table->string("province");
            $table->string("country");
            $table->string("postal_code", 10);
            $table->enum('organization_type', ['private', 'government'])->nullable();
            $table->boolean('is_company')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->softDeletes();
            $table->foreignId('location_id')->nullable()->constrained()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
