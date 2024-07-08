<?php

namespace Database\Seeders;

use App\Models\Diploma;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DiplomaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $diplomas = ['Bacc + 1', 'Bacc + 3', 'Niveau secondaire'];
        foreach ($diplomas as $diploma) {
            Diploma::create(['name' => $diploma]);
        }
    }
}
