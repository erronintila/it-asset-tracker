<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->id();
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
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('locations');
    }
}