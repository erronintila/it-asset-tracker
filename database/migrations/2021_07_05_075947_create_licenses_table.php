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
            $table->date('purchased_date')->nullable();
            $table->double('purchased_cost', 10, 2)->nullable();
            $table->date('warranty_start_date')->nullable();
            $table->date('warranty_end_date')->nullable();
            $table->timestamp("disposed_at")->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreignId('supplier_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('manufacturer_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('asset_category_id')->constrained()->onDelete('cascade');

            $table->foreignId('assigned_user_id')->nullable()->constrained('users');
            $table->foreignId('assigned_location_id')->nullable()->constrained('locations');
            $table->foreignId('assigned_asset_id')->nullable()->constrained('assets')->onDelete('cascade');

            $table->schemalessAttributes('extra_attributes');
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
