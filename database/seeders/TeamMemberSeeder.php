<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeamMemberSeeder extends Seeder
{
    public function run()
    {
        $teamMembers = [
            [
                'name' => "Anna Kovalenkova",
                'job' => "Head of Phuket office \nInternational Investment Department",
                'photo' => "/images/5c9816c6fee8642c601631facc73367b.png",
            ],
            [
                'name' => "Victoria Soshkina",
                'job' => "Senior Consultant \nInternational Investment Department",
                'photo' => "/images/0f5593a781376b29fa5563177301c78a.png",
            ],
            [
                'name' => "Zheneveva Borovskaia",
                'job' => "Senior consultant \nInternational Investment Department",
                'photo' => "/images/cbf9218a7f99e6bdeb2e99476246ff81.png",
            ],
        ];

        DB::table('team_members')->insert($teamMembers);
    }
}
