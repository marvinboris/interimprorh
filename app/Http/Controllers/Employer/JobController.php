<?php

namespace App\Http\Controllers\Employer;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Job;

class JobController extends Controller
{
    //
    public function index()
    {
        $employer = UtilController::get();

        return $employer->jobs()->latest()->get()->map(function ($job) {
            return array_merge($job->toArray(), ['company' => $job->company->name, 'contract' => $job->contract->name]);
        });
    }

    public function show($id)
    {
        return Job::findOrFail($id);
    }

    public function store()
    {
        $data = request()->all();
        $employer = UtilController::get();

        $employer->jobs()->create($data);

        return response()->json([
            'message' => UtilController::message('Job successfully created', 'success')
        ]);
    }
}
