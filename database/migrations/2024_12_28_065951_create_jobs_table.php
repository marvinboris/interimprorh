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
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->foreignId('company_id')->constrained();
            $table->decimal('salary_low', 8, 2);
            $table->decimal('salary_high', 8, 2);
            $table->string('location');
            $table->foreignId('contract_id')->constrained();
            $table->foreignId('diploma_id')->constrained();
            $table->json('languages');
            $table->json('responsibilities');
            $table->json('qualifications');
            $table->json('advantages');
            $table->json('experience');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
