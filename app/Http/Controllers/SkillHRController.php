<?php
// app/Http/Controllers/SkillHRController.php

namespace App\Http\Controllers;

use App\Models\SkillHR;
use Illuminate\Http\Request;

class SkillHRController extends Controller
{
    public function index()
    {
        return SkillHR::all();
    }

    public function show($id)
    {
        return SkillHR::findOrFail($id);
    }
}
