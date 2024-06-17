<?php

// app/Http/Controllers/JobController.php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index()
    {
        return Job::all();
    }

    public function show($id)
    {
        return Job::findOrFail($id);
    }
}