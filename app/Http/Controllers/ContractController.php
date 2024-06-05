<?php
// app/Http/Controllers/ContractController.php

namespace App\Http\Controllers;

use App\Models\Contract;
use Illuminate\Http\Request;

class ContractController extends Controller
{
    public function index()
    {
        return Contract::all();
    }

    public function show($id)
    {
        return Contract::findOrFail($id);
    }
}
