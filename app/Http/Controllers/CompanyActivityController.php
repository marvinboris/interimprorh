<?php
// app/Http/Controllers/CompanyActivityController.php

namespace App\Http\Controllers;

use App\Models\CompanyActivity;
use Illuminate\Http\Request;

class CompanyActivityController extends Controller
{
    public function index()
    {
        return CompanyActivity::all();
    }

    public function show($id)
    {
        return CompanyActivity::findOrFail($id);
    }
}
