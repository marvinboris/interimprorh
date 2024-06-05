<?php
// app/Http/Controllers/SubscriberController.php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;

class SubscriberController extends Controller
{
    public function index()
    {
        return Subscriber::all();
    }

    public function store(Request $request)
    {
        $subscriber = Subscriber::create($request->all());
        return response()->json($subscriber, 201);
    }

    public function show($id)
    {
        return Subscriber::findOrFail($id);
    }
}
