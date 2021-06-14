<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("address");
            $table->string("street")->nullable();
            $table->string("district")->nullable();
            $table->string("city");
            $table->string("province");
            $table->string("country");
            $table->string("postal_code");
            $table->string("latitude")->nullable();
            $table->string("longitude")->nullable();
            $table->enum("type", ['commercial', 'residential']);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
