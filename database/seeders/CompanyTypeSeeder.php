<?php

namespace Database\Seeders;

use App\Models\CompanyType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanyTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $companyTypes = [
            ['name' => 'SARL'],
            ['name' => 'SA'],
            ['name' => 'SAS'],
            ['name' => 'EURL'],
            ['name' => 'SNC'],
            ['name' => 'SCI']
        ];


        foreach ($companyTypes as $type) {
            CompanyType::create($type);
        }
    }
}
