<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->mediumText('description')->nullable();

            $table->enum('type', ['weight', 'unit']);
            $table->unsignedInteger('quantity_cost'); // cents per unit|kg

            $table->string('unit_name_singular')->nullable();
            $table->string('unit_name_plural')->nullable();

            $table->unsignedInteger('weight_increment')->nullable(); // grams

            $table->softDeletes();
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
        Schema::dropIfExists('products');
    }
}
