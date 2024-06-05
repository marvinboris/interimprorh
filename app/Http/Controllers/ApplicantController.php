<?php
// app/Http/Controllers/ApplicantController.php

namespace App\Http\Controllers;

use App\Models\Applicant;
use Illuminate\Http\Request;

class ApplicantController extends Controller
{
    public function index()
    {
        return Applicant::all();
    }
    public function show($id)
    {
        return Applicant::findOrFail($id);
    }
}
