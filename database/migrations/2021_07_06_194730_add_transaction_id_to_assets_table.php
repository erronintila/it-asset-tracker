<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTransactionIdToAssetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('assets', function (Blueprint $table) {
            $table->foreignId('last_request_id')->nullable()->constrained('transactions');
            $table->foreignId('last_work_order_id')->nullable()->constrained('transactions');
            // $table->foreignId('last_transaction_id')->nullable()->constrained('transactions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('assets', function (Blueprint $table) {
            $table->dropForeign('last_request_id');
            $table->dropForeign('last_work_order_id');
        });
    }
}
