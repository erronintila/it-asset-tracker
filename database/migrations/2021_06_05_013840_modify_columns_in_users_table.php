<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyColumnsInUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string("company")->nullable();
            $table->string('first_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('suffix')->nullable();
            $table->enum('gender', ['male', 'female'])->nullable();
            $table->date("birthdate")->nullable();
            $table->string("business_phone")->nullable();
            $table->string("home_phone")->nullable();
            $table->string("mobile_phone")->nullable();
            $table->string("website")->nullable();
            $table->string("fax")->nullable();
            $table->string('username')->unique();
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
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('first_name');
            $table->dropColumn('middle_name');
            $table->dropColumn('last_name');
            $table->dropColumn('suffix');
            $table->dropColumn('gender');
            $table->dropColumn("birthdate");
            $table->dropColumn("phone");
            $table->dropColumn("website");
            $table->dropColumn("fax");
            $table->dropColumn("username");
            $table->dropSoftDeletes();
        });
    }
}
