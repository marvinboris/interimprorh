<?php

// app/Http/Controllers/JobController.php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index()
    {
        return Job::all()->map(function ($job) {
            return array_merge($job->toArray(), ['company' => $job->company->name, 'contract' => $job->contract->name]);
        });
    }

    public function show($id)
    {
        return Job::findOrFail($id);
    }
}
