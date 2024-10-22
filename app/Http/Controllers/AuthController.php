<?php

namespace App\Http\Controllers;

use App\Mail\ResetLink;
use App\Mail\Welcome;
use App\Models\Admin;
use App\Models\Applicant;
use App\Models\Company;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    //
    public function login()
    {
        $data = request()->all();

        $message = [
            'content' => 'Incorrect credentials',
            'type' => 'danger'
        ];

        $applicant = Applicant::where('email', $data['email'])->first();
        if (!$applicant) return response()->json($message, 403);

        $check = Hash::check($data['password'], $applicant->password);
        if (!$check) return response()->json($message, 403);


        $tokenResult = $applicant->createToken(Applicant::personalAccessToken());
        $token = $tokenResult->token;

        $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();

        return response()->json([
            'token' => 'Bearer ' . $tokenResult->accessToken,
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
            'data' => $applicant,
        ]);
    }

    public function forgot()
    {
        $email = request()->email;
        $applicant = Applicant::whereEmail($email)->first();

        if (!$applicant) return response()->json(
            UtilController::message('Invalid email', 'danger'),
            404
        );

        $time = time() + 15 * 60;

        Mail::to($email)->send(new ResetLink(
            url('/reset?time=' . $time . '&email=' . $email . '&token=' . Hash::make($time . '-' . $email)),
        ));

        return response()->json(
            UtilController::message('Reset link sent to: ' . $email, 'success')
        );
    }

    public function reset()
    {
        $token = request()->token;
        $time = request()->time;
        $email = request()->email;
        $password = request()->password;

        $verified = Hash::check($time . '-' . $email, $token);

        if (!Carbon::createFromTimestamp($time)->greaterThan(Carbon::createFromTimestamp(time()))) return response()->json(
            UtilController::message('Token expired', 'danger'),
        );

        if (!$verified) return response()->json(
            UtilController::message('Invalid token', 'danger'),
            404
        );

        Applicant::whereEmail($email)->first()->update(['password' => Hash::make($password)]);

        return response()->json(
            UtilController::message('Success', 'success')
        );
    }

    public function register()
    {
        $data = request()->validate([
            'email' => 'required|email|unique:applicants',
            'password' => 'required|confirmed'
        ]);

        Mail::to($data['email'])->send(new Welcome(false));
        Applicant::create([
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        return response()->json([
            'email' => $data['email'],
        ], 201);
    }


    public function employerLogin()
    {
        $data = request()->all();

        $message = [
            'content' => 'Incorrect credentials',
            'type' => 'danger'
        ];

        $employer = Company::where('email', $data['email'])->first();
        if (!$employer) return response()->json($message, 403);

        $check = Hash::check($data['password'], $employer->password);
        if (!$check) return response()->json($message, 403);


        $tokenResult = $employer->createToken(Company::personalAccessToken());
        $token = $tokenResult->token;

        $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();

        return response()->json([
            'token' => 'Bearer ' . $tokenResult->accessToken,
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
            'data' => $employer,
        ]);
    }

    public function employerForgot()
    {
        $email = request()->email;
        $applicant = Company::whereEmail($email)->first();

        if (!$applicant) return response()->json(
            UtilController::message('Invalid email', 'danger'),
            404
        );

        $time = time() + 15 * 60;

        Mail::to($email)->send(new ResetLink(
            url('/employer/reset?time=' . $time . '&email=' . $email . '&token=' . Hash::make($time . '-' . $email)),
        ));

        return response()->json(
            UtilController::message('Reset link sent to: ' . $email, 'success')
        );
    }

    public function employerReset()
    {
        $token = request()->token;
        $time = request()->time;
        $email = request()->email;
        $password = request()->password;

        $verified = Hash::check($time . '-' . $email, $token);

        if (!Carbon::createFromTimestamp($time)->greaterThan(Carbon::createFromTimestamp(time()))) return response()->json(
            UtilController::message('Token expired', 'danger'),
        );

        if (!$verified) return response()->json(
            UtilController::message('Invalid token', 'danger'),
            404
        );

        Company::whereEmail($email)->first()->update(['password' => Hash::make($password)]);

        return response()->json(
            UtilController::message('Success', 'success')
        );
    }


    public function employerRegister()
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
        Mail::to($data['email'])->send(new Welcome(true));

        return response()->json([
            'email' => $data['email'],
        ], 201);
    }


    public function adminLogin()
    {
        $data = request()->all();

        $message = [
            'content' => 'Incorrect credentials',
            'type' => 'danger'
        ];

        $admin = Admin::where('email', $data['email'])->first();
        if (!$admin) return response()->json($message, 403);

        $check = Hash::check($data['password'], $admin->password);
        if (!$check) return response()->json($message, 403);


        $tokenResult = $admin->createToken(Admin::personalAccessToken());
        $token = $tokenResult->token;

        $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();

        return response()->json([
            'token' => 'Bearer ' . $tokenResult->accessToken,
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
            'data' => $admin,
        ]);
    }
}
