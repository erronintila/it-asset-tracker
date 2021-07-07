<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddManagerIdToDepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('departments', function (Blueprint $table) {
            $table->foreignId('manager_id')->nullable()->constrained('employees')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('departments', function (Blueprint $table) {
            $table->dropForeign('manager_id');
        });
    }
}
