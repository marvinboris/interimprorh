<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicantController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CompanyActivityController;
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
use App\Http\Controllers\AuthController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\UtilController;
use App\Models\Request;
use Illuminate\Support\Facades\Hash;

Route::get('/admin/dashboard', [AdminDashboardController::class, 'admin.dashboard']);

Route::post('/employer', [AuthController::class, 'employer']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::apiResource('applicants', ApplicantController::class);
Route::apiResource('companies', CompanyController::class);
Route::apiResource('company-activities', CompanyActivityController::class);
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


Route::namespace('User')->prefix('user')->name('user.')->group(function () {
    Route::middleware('auth:api')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        Route::get('/requests', function () {
            $count = request()->count;
            $data = Request::latest();
            if ($count) $data = $data->limit($count);
            return $data->get();
        });

        Route::patch('', function () {
            $data = array_merge(request()->except(['password']), request()->has('password') ? ['password' => Hash::make(request()->password)] : []);
            UtilController::get()->update($data);
            return response()->json($data);
        });
    });
});

Route::middleware('auth:admin,api')->group(function () {
    Route::get('logout', [UtilController::class, 'logout'])->name('logout');
    Route::get('account', [UtilController::class, 'account'])->name('account');

    Route::prefix('notifications')->name('notifications.')->group(function () {
        Route::get('{notification}', [UtilController::class, 'notification'])->name('show');
        Route::get('', [UtilController::class, 'notifications'])->name('index');
    });

    Route::name('export.')->prefix('export')->group(function () {
        Route::name('xlsx')->post('xlsx', 'ExportController@xlsx');
        Route::name('csv')->post('csv', 'ExportController@csv');
        Route::name('pdf')->post('pdf', 'ExportController@pdf');
    });
});
