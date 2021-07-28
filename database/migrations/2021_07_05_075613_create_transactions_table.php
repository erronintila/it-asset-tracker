<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('reference_no')->nullable();
            $table->timestamp('request_date');
            $table->string('description');

            $table->timestamp('approved_at')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->timestamp('posted_at')->nullable();
            $table->timestamp('cancelled_at')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->unsignedBigInteger("transactionable_id")->nullable();
            $table->string("transactionable_type")->nullable();

            $table->foreignId('transaction_type_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('cascade');

            $table->foreignId('parent_asset_id')->nullable()->constrained('assets')->onDelete('cascade');
            $table->foreignId('owner_id')->nullable()->constrained('users')->onDelete('cascade');

            $table->foreignId('assigned_user_id')->nullable()->constrained('users');
            $table->foreignId('assigned_location_id')->nullable()->constrained('locations');
            $table->foreignId('assigned_asset_id')->nullable()->constrained('assets')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
