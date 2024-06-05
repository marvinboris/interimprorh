<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicantController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CompanyTypeController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ContractController;
use App\Http\Controllers\DiplomaController;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SkillHRController;
use App\Http\Controllers\SubscriberController;
use App\Http\Controllers\TeamMemberController;
use App\Http\Controllers\TestimonyController;
use App\Http\Controllers\AdminDashboardController;

Route::get('/admin/dashboard', [AdminDashboardController::class, 'index']);

Route::apiResource('applicants', ApplicantController::class);
Route::apiResource('companies', CompanyController::class);
Route::apiResource('company-types', CompanyTypeController::class);
Route::apiResource('contacts', ContactController::class);
Route::apiResource('contracts', ContractController::class);
Route::apiResource('diplomas', DiplomaController::class);
Route::apiResource('faqs', FAQController::class);
Route::apiResource('jobs', JobController::class);
Route::apiResource('news', NewsController::class);
Route::apiResource('requests', RequestController::class);
Route::apiResource('services', ServiceController::class);
Route::apiResource('skills-hr', SkillHRController::class);
Route::apiResource('subscribers', SubscriberController::class);
Route::apiResource('team-members', TeamMemberController::class);
Route::apiResource('testimonies', TestimonyController::class);

