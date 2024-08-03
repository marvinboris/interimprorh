<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Company;

class CompanyController extends Controller
{
    //
    public function store()
    {
        $data = request()->all();

        Company::create($data);

        return response()->json([
            'message' => UtilController::message('Company successfully created', 'success')
        ]);
    }
}
