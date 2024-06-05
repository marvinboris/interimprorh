<?php
// app/Http/Controllers/DiplomaController.php

namespace App\Http\Controllers;

use App\Models\Diploma;
use Illuminate\Http\Request;

class DiplomaController extends Controller
{
    public function index()
    {
        return Diploma::all();
    }

    public function show($id)
    {
        return Diploma::findOrFail($id);
    }
}
