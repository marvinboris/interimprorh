<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function login()
    {
        $data = request()->all();

        $message = [
            'message' => [
                'content' => 'Incorrect credentials',
                'type' => 'danger'
            ]
        ];

        $company = Company::where('email', $data['email']);
        if (!$company) return response()->json($message, 403);

        $check = Hash::check($data['password'], $company->password);
        if (!$check) return response()->json($message, 403);


        $tokenResult = $company->createToken(Company::personalAccessToken());
        $token = $tokenResult->token;

        $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();

        return response()->json([
            'token' => 'Bearer ' . $tokenResult->accessToken,
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
            'data' => $data,
        ]);
    }

    public function register()
    {
        $data = request()->validate([
            'name' => 'unique:companies|required',
            'activity' => 'required|exists:company_activities,id',
            'email' => 'required|email|unique:companies',
            'phone' => 'required|unique:companies',
            'password' => 'required|confirmed'
        ]);

        Company::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'company_activity_id' => $data['activity'],
            'password' => Hash::make($data['password']),
        ]);

        return response()->json([
            'email' => $data['email'],
        ], 201);
    }
}
