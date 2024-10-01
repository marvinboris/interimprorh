<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    public function run()
    {
        $services = [
            [
                'name' => "Prestation de services",
                'description' => "Nous disposons d’une équipe d’experts et des outils sophistiqués pour accompagner les jeunes et les adultes à trouver leur voie, orienter leur parcours et favoriser leur intégration dans le monde professionnel. IP-RH vous propose un accompagnement et une orientation sur mesure.",
                'body' => "",
                'link' => "/services/prestation-de-services",
                'slug' => "prestation-de-services",
            ],
            [
                'name' => "Ingénierie de formation",
                'description' => "La formation professionnelle est un levier indispensable dans le maintien des compétences. Elle consiste à acquérir, à maintenir ou à améliorer les différents savoirs : savoir-faire, savoir-être. Et ce, afin de répondre aux besoins en compétences et au développement qui l’accompagne.",
                'body' => "",
                'link' => "/services/ingenierie-de-formation",
                'slug' => "ingenierie-de-formation",
            ],
            [
                'name' => "Conseil RH",
                'description' => "INTERIM PRO RH réalise l’audit de votre structure ou l’évaluation de votre projet d’entreprise. Notre démarche permet de s’assurer, avec la participation des acteurs,",
                'body' => "",
                'link' => "/services/conseil-rh",
                'slug' => "conseil-rh",
            ],
            [
                'name' => "Intérim et placement des travailleurs",
                'description' => "La formation professionnelle est un levier indispensable dans le maintien des compétences. Elle consiste à acquérir, à maintenir ou à améliorer les différents savoirs : savoir-faire, savoir-être. Et ce, afin de répondre aux besoins en compétences et au développement qui l’accompagne.",
                'body' => "",
                'link' => "/services/interim-et-placement-des-travailleurs",
                'slug' => "interim-et-placement-des-travailleurs",
            ],
            [
                'name' => "Mise à disposition du personnel",
                'description' => "La formation professionnelle est un levier indispensable dans le maintien des compétences. Elle consiste à acquérir, à maintenir ou à améliorer les différents savoirs : savoir-faire, savoir-être. Et ce, afin de répondre aux besoins en compétences et au développement qui l’accompagne.",
                'body' => "",
                'link' => "/services/mise-a-disposition-du-personnel",
                'slug' => "mise-a-disposition-du-personnel",
            ],
        ];

        DB::table('services')->insert($services);
    }
}
