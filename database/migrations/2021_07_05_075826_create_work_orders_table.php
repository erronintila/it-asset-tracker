<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_orders', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->text('incident');
            $table->text('diagnosis');
            $table->text('action_taken');
            $table->text('recommendation');
            $table->timestamp('scheduled_start_date')->nullable();
            $table->timestamp('scheduled_end_date')->nullable();
            $table->timestamp('actual_start_date')->nullable();
            $table->timestamp('actual_end_date')->nullable();
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
        Schema::dropIfExists('work_orders');
    }
}
