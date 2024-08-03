<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            AdminSeeder::class,
            ContractSeeder::class,
            DiplomaSeeder::class,
            CompanyActivitySeeder::class,
            CompanySeeder::class,
            CompanyTypeSeeder::class,
            FAQSeeder::class,
            SkillHRSeeder::class,
            ServiceSeeder::class,
            TeamMemberSeeder::class,
            TestimonySeeder::class,
            NewsSeeder::class,
            JobSeeder::class,
            ApplicantSeeder::class,
        ]);
    }
}
