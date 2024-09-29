<?php

namespace Database\Seeders;

use App\Models\CompanyActivity;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompanyActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $activities = [
            "Achat",
            "Activités associative",
            "Commercial, vente",
            "Education, formation",
            "Informatique, nouvelle technologie",
            "Intérim, recrutement",
            "Juridique",
            "Management, direction générale",
            "Marketing, communication",
            "Métiers de la santé et du social",
            "Métiers des services",
            "Métiers des BTP",
            "Production, maintenance, qualité",
            "Gestion des projets",
            "RH, formation",
            "Secrétariat, assistanat",
            "Services collectifs et sociaux",
            "Téléassistance, télémarketing",
            "Télécommunication",
            "Tourisme, Hôtellerie, restauration",
            "Transport, logistique"
        ];

        foreach ($activities as $activity) {
            CompanyActivity::create([
                'name' => $activity
            ]);
        }
    }
}
