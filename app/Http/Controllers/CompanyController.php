<?php
// app/Http/Controllers/CompanyController.php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function index()
    {
        return Company::latest()->get();
    }

    public function show($id)
    {
        return Company::findOrFail($id);
    }
}
