<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            CompanyActivitySeeder::class,
            FAQSeeder::class,
            SkillHRSeeder::class,
            ServiceSeeder::class,
            TeamMemberSeeder::class,
            TestimonySeeder::class,
            NewsSeeder::class,
        ]);
    }
}
