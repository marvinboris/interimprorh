<?php

namespace Database\Seeders;

use App\Models\Applicant;
use App\Models\Diploma;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ApplicantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $applicants = [
            [
                'email' => 'jaris.ultio.21@gmail.com',
                'password' => Hash::make('12345'),
                'first_name' => 'Boris Marvin',
                'last_name' => 'Ndouma',
                'job' => 'Developer',
                'city' => 'Douala',
                'country' => 'CM',
                'experience' => 8,
                'biography' => "Ma fascination pour l'interaction entre l'humain et la technologie m'a conduit à me spécialiser dans l'UI/UX design dès le début de ma carrière. Titulaire d'un diplôme en design graphique, j'ai affiné mes compétences en étudiant les principes de conception, en suivant de près les tendances émergentes et en maîtrisant les outils et les logiciels de pointe nécessaires pour créer des expériences utilisateur de qualité supérieure.",
                "availability" => 0
            ]
        ];

        foreach ($applicants as $applicant) {
            Applicant::create($applicant);
        }
    }
}
