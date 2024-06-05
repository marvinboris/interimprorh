<?php
// app/Http/Controllers/RequestController.php

namespace App\Http\Controllers;

use App\Models\Request;
use Illuminate\Http\Request as HttpRequest;

class RequestController extends Controller
{
    public function index()
    {
        return Request::all();
    }

    public function show($id)
    {
        return Request::findOrFail($id);
    }
}
