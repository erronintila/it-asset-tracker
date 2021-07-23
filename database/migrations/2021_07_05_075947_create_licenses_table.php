<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLicensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('licenses', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('slug');
            $table->string('reference_no')->nullable();
            $table->string('serial_no')->nullable();
            $table->string('description');
            $table->timestamps();
            $table->softDeletes();
            $table->foreignId('supplier_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('manufacturer_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('asset_category_id')->constrained()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('licenses');
    }
}
