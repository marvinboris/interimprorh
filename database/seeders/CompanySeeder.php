<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $companies = [
            [
                'name' => "Eneo Cameroon",
                'email' => "contact@eneo.cm",
                'phone' => "237 699834872",
                'creation' => "2003",
                'password' => Hash::make('12345'),
                'company_activity_id' => 1,
                'contact_person' => "Mr. James Al..",
            ],
            [
                'name' => "Orange Cameroon",
                'email' => "contact@orange.cm",
                'phone' => "237 699834872",
                'creation' => "1995",
                'password' => Hash::make('12345'),
                'company_activity_id' => 1,
                'contact_person' => "John Aeil.",
            ],
            [
                'name' => "Emploi services",
                'email' => "contact@ems.cm",
                'phone' => "237 699834872",
                'creation' => "2002",
                'password' => Hash::make('12345'),
                'company_activity_id' => 1,
                'contact_person' => "Madline Amee",
            ],
            [
                'name' => "Interim Pro RH",
                'email' => "contact@intr.cm",
                'phone' => "237 699834872",
                'creation' => "2006",
                'password' => Hash::make('12345'),
                'company_activity_id' => 1,
                'contact_person' => "Joska molali",
            ],
            [
                'name' => "Santa Lucia",
                'email' => "contact@santalu.cm",
                'phone' => "237 699834872",
                'creation' => "2008",
                'password' => Hash::make('12345'),
                'company_activity_id' => 1,
                'contact_person' => "Nomeal aind",
            ],
            [
                'name' => "Mahima",
                'email' => "contact@mh.cm",
                'phone' => "237 699834872",
                'creation' => "2003",
                'password' => Hash::make('12345'),
                'company_activity_id' => 1,
                'contact_person' => "Kamdem Joseph",
            ],
            [
                'name' => "Super U",
                'email' => "contact@superu.cm",
                'phone' => "237 699834872",
                'creation' => "1994",
                'password' => Hash::make('12345'),
                'company_activity_id' => 1,
                'contact_person' => "Alain Bordau",
            ],
        ];
        foreach ($companies as $company) {
            Company::create($company);
        }
    }
}
