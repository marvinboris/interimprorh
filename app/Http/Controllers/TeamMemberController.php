<?php
// app/Http/Controllers/TeamMemberController.php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Illuminate\Http\Request;

class TeamMemberController extends Controller
{
    public function index()
    {
        return TeamMember::all();
    }

    public function show($id)
    {
        return TeamMember::findOrFail($id);
    }
}
