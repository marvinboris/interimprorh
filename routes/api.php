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
use App\Http\Controllers\Employer\JobController as EmployerJobController;
use App\Http\Controllers\Employer\DashboardController as EmployerDashboardController;
use App\Http\Controllers\Admin\CompanyController as AdminCompanyController;
use App\Http\Controllers\Admin\JobController as AdminJobController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\UtilController;
use App\Models\Request;
use Illuminate\Support\Facades\Hash;


Route::post('/login', [AuthController::class, 'login']);
Route::post('/forgot', [AuthController::class, 'forgot']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/reset', [AuthController::class, 'reset']);

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

Route::namespace('Employer')->prefix('employer')->name('employer.')->group(function () {
    Route::post('/login', [AuthController::class, 'employerLogin'])->name('login');
    Route::post('/forgot', [AuthController::class, 'employerForgot'])->name('forgot');
    Route::post('/register', [AuthController::class, 'employerRegister'])->name('register');
    Route::post('/reset', [AuthController::class, 'employerReset'])->name('reset');

    Route::middleware('auth:employer')->group(function () {
        Route::get('/dashboard', [EmployerDashboardController::class, 'index'])->name('dashboard');

        Route::put('/requests/{id}', function ($id) {
            $datum = Request::find($id);
            $datum->update(request()->all());
            return response()->json($datum->toArray() + [
                'applicant' => $datum->applicant->first_name,
                '_applicant' => $datum->applicant,
                'job' => $datum->job->name,
                '_job' => $datum->job,
                'location' => $datum->job->location,
                'contract' => $datum->job->contract->name,
            ]);
        });

        Route::get('/requests', function () {
            $count = request()->count;
            $data = Request::latest();
            if ($count) $data = $data->limit($count);
            return $data->get()->map(function ($datum) {
                return $datum->toArray() + [
                    'applicant' => $datum->applicant->first_name,
                    '_applicant' => $datum->applicant,
                    'job' => $datum->job->name,
                    '_job' => $datum->job,
                    'location' => $datum->job->location,
                    'contract' => $datum->job->contract->name,
                ];
            });
        });


        Route::patch('', function () {
            $data = array_merge(request()->except(['password']), request()->has('password') ? ['password' => Hash::make(request()->password)] : []);
            if ($file = request()->file('logo')) {
                $fileName = time() . '-' . $file->getClientOriginalName();
                $file->move(public_path('/images/companies'), $fileName);
                $data['logo'] = $fileName;
            }
            UtilController::get()->update($data);
            return response()->json($data);
        });

        Route::get('/jobs/{id}', function ($id) {
            $datum = UtilController::get()->jobs()->find($id);
            return response()->json($datum);
        });

        Route::post('/jobs', [EmployerJobController::class, 'store'])->name('jobs.store');
        Route::get('/jobs', [EmployerJobController::class, 'index'])->name('jobs.index');
    });
});

Route::namespace('Admin')->prefix('admin')->name('admin.')->group(function () {
    Route::post('/login', [AuthController::class, 'adminLogin'])->name('login');

    Route::middleware('auth:admin')->group(function () {
        Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');

        Route::post('/jobs', [AdminJobController::class, 'store'])->name('jobs.store');
        Route::post('/companies', [AdminCompanyController::class, 'store'])->name('companies.store');
    });
});

Route::namespace('User')->prefix('user')->name('user.')->group(function () {
    Route::middleware('auth:api')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        Route::get('/requests', function () {
            $count = request()->count;
            $data = UtilController::get()->requests()->latest();
            if ($count) $data = $data->limit($count);
            return $data->get()->map(function ($datum) {
                return $datum->toArray() + [
                    'company' => $datum->job->company->name,
                    'location' => $datum->job->location,
                    'contract' => $datum->job->contract->name,
                    '_job' => $datum->job,
                ];
            });
        });

        Route::get('/requests/{id}', function ($id) {
            $applicant = UtilController::get();
            $res = Request::whereJobId($id)->whereApplicantId($applicant->id)->first();
            return response()->json([], $res ? 200 : 404);
        });

        Route::post('/apply/{id}', function ($id) {
            $applicant = UtilController::get();
            Request::create([
                'job_id' => $id,
                'applicant_id' => $applicant->id,
                'status' => 0,
            ]);
        });

        Route::patch('', function () {
            $data = array_merge(request()->except(['password']), request()->has('password') ? ['password' => Hash::make(request()->password)] : []);
            UtilController::get()->update($data);
            return response()->json($data);
        });

        Route::post('/resume', function () {
            if ($file = request()->file('resume')) {
                $fileName = time() . '-' . $file->getClientOriginalName();
                $file->move(public_path('/files/applicants'), $fileName); // Store the file in the 'public/files/applicants' directory
                UtilController::get()->update(['resume' => $fileName]);
            }
            return response()->json(UtilController::get());
        });
    });
});

Route::middleware('auth:admin,employer,api')->group(function () {
    Route::get('logout', [UtilController::class, 'logout'])->name('logout');
    Route::get('account', [UtilController::class, 'account'])->name('account');

    Route::prefix('notifications')->name('notifications.')->group(function () {
        Route::get('{notification}', [UtilController::class, 'notification'])->name('show');
        Route::get('', [UtilController::class, 'notifications'])->name('index');
    });

    Route::name('export.')->prefix('export')->group(function () {
        // Route::name('xlsx')->post('xlsx', 'ExportController@xlsx');
        // Route::name('csv')->post('csv', 'ExportController@csv');
        // Route::name('pdf')->post('pdf', 'ExportController@pdf');
    });
});
