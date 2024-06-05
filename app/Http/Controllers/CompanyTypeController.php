<?php
// app/Http/Controllers/CompanyTypeController.php

namespace App\Http\Controllers;

use App\Models\CompanyType;
use Illuminate\Http\Request;

class CompanyTypeController extends Controller
{
    public function index()
    {
        return CompanyType::all();
    }

    public function show($id)
    {
        return CompanyType::findOrFail($id);
    }
}
