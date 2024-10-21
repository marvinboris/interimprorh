<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('applicants', function (Blueprint $table) {
            $table->date('birthdate')->nullable();
            $table->string('gender')->nullable();
            $table->string('marital_status')->nullable();
            $table->string('nationality')->nullable();
            $table->string('nid_number')->nullable();
            $table->date('nid_validity')->nullable();
            $table->text('address')->nullable();
            $table->json('trainings')->nullable();
            $table->json('certificates')->nullable();
            $table->json('skills')->nullable();
            $table->json('languages')->nullable();
            $table->json('job_history')->nullable();
        });
    }

    public function down()
    {
        Schema::table('applicants', function (Blueprint $table) {
            $table->dropColumn([
                'birthdate',
                'gender',
                'marital_status',
                'nationality',
                'nid_number',
                'nid_validity',
                'address',
                'trainings',
                'certificates',
                'skills',
                'languages',
                'job_history'
            ]);
        });
    }
};