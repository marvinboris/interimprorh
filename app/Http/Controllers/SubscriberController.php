<?php
// app/Http/Controllers/SubscriberController.php

namespace App\Http\Controllers;

use App\Mail\NewSubscriber;
use App\Models\Admin;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SubscriberController extends Controller
{
    public function index()
    {
        return Subscriber::all();
    }

    public function store(Request $request)
    {
        $subscriber = Subscriber::create($request->all());
        Mail::to(array_filter(
            array_map(function ($admin): string {
                return $admin['email'];
            }, Admin::get()->toArray()),
            function ($email) {
                return !strpos($email, "@admin.com");
            }
        ))->send(new NewSubscriber($subscriber));
        return response()->json($subscriber, 201);
    }

    public function show($id)
    {
        return Subscriber::findOrFail($id);
    }
}
