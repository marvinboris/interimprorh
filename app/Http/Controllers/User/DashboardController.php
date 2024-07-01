<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //

    public function index()
    {
        $user = UtilController::get();

        $requests = $user->requests()->count();
        $interviews = $user->requests()->whereStatus(1)->count();

        return response()->json([
            'requests' => $requests,
            'interviews' => $interviews,
            'status' => $user->status,
        ]);
    }
}
