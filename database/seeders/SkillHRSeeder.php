<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkillHRSeeder extends Seeder
{
    public function run()
    {
        $skills = [
            [
                'name' => "Bilan Des Compétences Et Bilan Professionnel",
                'description' => "INTERIM PRO RH vous accompagne en vue d'avoir une meilleure connaissance de vos aptitudes et compétences, d'identifier vos talents et vos difficultés, de renforcer votre capital confiance, d'identifier vos valeurs et aspirations, de définir vos priorités, vos objectifs et vos projets professionnels, de mettre en place des dispositifs de développement personnel en rapport avec vos réels besoins, d'anticiper sur les besoins en formation, de planifier votre carrière professionnelle et votre insertion professionnelle.",
            ],
            [
                'name' => "Orientation Académique",
                'description' => "Nous disposons d'une équipe d'experts et des outils sophistiqués pour accompagner les jeunes et les adultes à trouver leur voie, orienter leur parcours et favoriser leur intégration dans le monde professionnel. IP-RH vous propose un accompagnement et une orientation sur mesure.",
            ],
            [
                'name' => "Gestion Des Performances",
                'description' => "INTERIM PRO RH vous accompagne en vue d'avoir une meilleure connaissance de vos aptitudes et compétences, d'identifier vos talents et vos difficultés, de renforcer votre capital confiance, d'identifier vos valeurs et aspirations, de définir vos priorités, vos objectifs et vos projets professionnels, de mettre en place des dispositifs de développement personnel en rapport avec vos réels besoins, d'anticiper sur les besoins en formation, de planifier votre carrière professionnelle et votre insertion professionnelle.",
            ],
            [
                'name' => "Gestion Prévisionnelle Des Emplois Et Des Compétences",
                'description' => "Nous vous accompagnons à anticiper sur le devenir de votre entreprise en identifiant les besoins en développement des compétences et en mettant en place les conditions et outils nécessaires pour vous garantir le développement de vos activités.",
            ],
        ];

        DB::table('skill_h_r_s')->insert($skills);
    }
}
