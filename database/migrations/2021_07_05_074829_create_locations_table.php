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
            $table->string('code')->unique();
            $table->string('slug')->unique();
            $table->string("name")->unique();
            $table->string("address");
            $table->string("street")->nullable();
            $table->string("district")->nullable();
            $table->string("city");
            $table->string("province");
            $table->string("country");
            $table->string("postal_code", 10);
            $table->string("latitude")->nullable();
            $table->string("longitude")->nullable();
            $table->boolean('is_active')->default(true);
            $table->foreignId('location_id')->nullable()->constrained()->onDelete('cascade');
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
        Schema::dropIfExists('locations');
    }
}
