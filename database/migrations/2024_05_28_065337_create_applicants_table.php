<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('applicants', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->string('password');
            $table->string('phone')->nullable();
            $table->string('photo')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('job')->nullable();
            $table->string('city')->nullable();
            $table->string('country')->nullable();
            $table->foreignId('diploma_id')->nullable()->constrained();
            $table->integer('experience')->nullable();
            $table->longText('biography')->nullable();
            $table->tinyInteger('availability')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applicants');
    }
};
