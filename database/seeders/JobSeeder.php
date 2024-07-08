<?php

namespace Database\Seeders;

use App\Models\Job;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jobs = [
            [
                'advantages' => [],
                'company_id' => 1,
                'contract_id' => 1,
                'experience' => [
                    "Bacc + 3 ans",
                    "Bien parler et écrire anglais serait un plus",
                ],
                'languages' => ["en", "fr"],
                'location' => "Douala",
                'name' => "Administrateur réseau",
                'qualifications' => [],
                'responsibilities' => [
                    "Configuration, installation et maintenance des équipements réseau, y compris les routeurs, les commutateurs, les pare-feu, les contrôleurs WLAN, etc.",
                    "Surveiller les performances du réseau, identifier les goulets d'étranglement et mettre en œuvre des solutions pour optimiser les performances et la disponibilité.",
                    "Gérer la sécurité du réseau en mettant en place et en maintenant des politiques de sécurité, des pare-feu, des VPN et d'autres mesures de sécurité nécessaires.",
                    "Gérer les comptes utilisateurs, les autorisations d'accès et les niveaux de privilège pour garantir la sécurité des données et des ressources réseau.",
                    "Diagnostiquer et résoudre les problèmes réseau, y compris les pannes matérielles, les problèmes de connectivité et les attaques de sécurité.",
                    "Planifier et mettre en œuvre des mises à niveau du réseau, y compris la mise à niveau du matériel, des logiciels et des technologies réseau pour répondre aux besoins de l'entreprise.",
                    "Collaborer avec d'autres équipes informatiques pour soutenir les initiatives de développement et d'expansion de l'infrastructure réseau.",
                ],
                'salary_high' => 120000,
                'salary_low' => 80000,
                'diploma_id' => 1,
                'description' => "En tant qu'administrateur réseau, vous serez responsable de la gestion et de la maintenance de notre infrastructure réseau afin de garantir un fonctionnement fluide et sécurisé. Vous travaillerez en étroite collaboration avec notre équipe informatique pour assurer la connectivité réseau, la sécurité et la disponibilité des services pour l'ensemble de l'organisation. Voici un aperçu des responsabilités clés",
            ],
            [
                'advantages' => [],
                'company_id' => 2,
                'contract_id' => 1,
                'experience' => [
                    "Bacc + 3 ans",
                    "Bien parler et écrire anglais serait un plus",
                ],
                'languages' => ["en", "fr"],
                'location' => "Douala",
                'name' => "Juriste comptable",
                'qualifications' => [],
                'responsibilities' => [
                    "Configuration, installation et maintenance des équipements réseau, y compris les routeurs, les commutateurs, les pare-feu, les contrôleurs WLAN, etc.",
                    "Surveiller les performances du réseau, identifier les goulets d'étranglement et mettre en œuvre des solutions pour optimiser les performances et la disponibilité.",
                    "Gérer la sécurité du réseau en mettant en place et en maintenant des politiques de sécurité, des pare-feu, des VPN et d'autres mesures de sécurité nécessaires.",
                    "Gérer les comptes utilisateurs, les autorisations d'accès et les niveaux de privilège pour garantir la sécurité des données et des ressources réseau.",
                    "Diagnostiquer et résoudre les problèmes réseau, y compris les pannes matérielles, les problèmes de connectivité et les attaques de sécurité.",
                    "Planifier et mettre en œuvre des mises à niveau du réseau, y compris la mise à niveau du matériel, des logiciels et des technologies réseau pour répondre aux besoins de l'entreprise.",
                    "Collaborer avec d'autres équipes informatiques pour soutenir les initiatives de développement et d'expansion de l'infrastructure réseau.",
                ],
                'salary_high' => 220000,
                'salary_low' => 90000,
                'diploma_id' => 1,
                'description' => "En tant qu'administrateur réseau, vous serez responsable de la gestion et de la maintenance de notre infrastructure réseau afin de garantir un fonctionnement fluide et sécurisé. Vous travaillerez en étroite collaboration avec notre équipe informatique pour assurer la connectivité réseau, la sécurité et la disponibilité des services pour l'ensemble de l'organisation. Voici un aperçu des responsabilités clés",
            ],
            [
                'advantages' => [],
                'company_id' => 3,
                'contract_id' => 1,
                'experience' => [
                    "Bacc + 3 ans",
                    "Bien parler et écrire anglais serait un plus",
                ],
                'languages' => ["en", "fr"],
                'location' => "Douala",
                'name' => "Assistant comptable",
                'qualifications' => [],
                'responsibilities' => [
                    "Configuration, installation et maintenance des équipements réseau, y compris les routeurs, les commutateurs, les pare-feu, les contrôleurs WLAN, etc.",
                    "Surveiller les performances du réseau, identifier les goulets d'étranglement et mettre en œuvre des solutions pour optimiser les performances et la disponibilité.",
                    "Gérer la sécurité du réseau en mettant en place et en maintenant des politiques de sécurité, des pare-feu, des VPN et d'autres mesures de sécurité nécessaires.",
                    "Gérer les comptes utilisateurs, les autorisations d'accès et les niveaux de privilège pour garantir la sécurité des données et des ressources réseau.",
                    "Diagnostiquer et résoudre les problèmes réseau, y compris les pannes matérielles, les problèmes de connectivité et les attaques de sécurité.",
                    "Planifier et mettre en œuvre des mises à niveau du réseau, y compris la mise à niveau du matériel, des logiciels et des technologies réseau pour répondre aux besoins de l'entreprise.",
                    "Collaborer avec d'autres équipes informatiques pour soutenir les initiatives de développement et d'expansion de l'infrastructure réseau.",
                ],
                'salary_high' => 220000,
                'salary_low' => 90000,
                'diploma_id' => 1,
                'description' => "En tant qu'administrateur réseau, vous serez responsable de la gestion et de la maintenance de notre infrastructure réseau afin de garantir un fonctionnement fluide et sécurisé. Vous travaillerez en étroite collaboration avec notre équipe informatique pour assurer la connectivité réseau, la sécurité et la disponibilité des services pour l'ensemble de l'organisation. Voici un aperçu des responsabilités clés",
            ],
            [
                'advantages' => [],
                'company_id' => 3,
                'contract_id' => 1,
                'experience' => [
                    "Bacc + 3 ans",
                    "Bien parler et écrire anglais serait un plus",
                ],
                'languages' => ["en", "fr"],
                'location' => "Douala",
                'name' => "Developpeur  web Full Stack",
                'qualifications' => [],
                'responsibilities' => [
                    "Configuration, installation et maintenance des équipements réseau, y compris les routeurs, les commutateurs, les pare-feu, les contrôleurs WLAN, etc.",
                    "Surveiller les performances du réseau, identifier les goulets d'étranglement et mettre en œuvre des solutions pour optimiser les performances et la disponibilité.",
                    "Gérer la sécurité du réseau en mettant en place et en maintenant des politiques de sécurité, des pare-feu, des VPN et d'autres mesures de sécurité nécessaires.",
                    "Gérer les comptes utilisateurs, les autorisations d'accès et les niveaux de privilège pour garantir la sécurité des données et des ressources réseau.",
                    "Diagnostiquer et résoudre les problèmes réseau, y compris les pannes matérielles, les problèmes de connectivité et les attaques de sécurité.",
                    "Planifier et mettre en œuvre des mises à niveau du réseau, y compris la mise à niveau du matériel, des logiciels et des technologies réseau pour répondre aux besoins de l'entreprise.",
                    "Collaborer avec d'autres équipes informatiques pour soutenir les initiatives de développement et d'expansion de l'infrastructure réseau.",
                ],
                'salary_high' => 220000,
                'salary_low' => 90000,
                'diploma_id' => 1,
                'description' => "En tant qu'administrateur réseau, vous serez responsable de la gestion et de la maintenance de notre infrastructure réseau afin de garantir un fonctionnement fluide et sécurisé. Vous travaillerez en étroite collaboration avec notre équipe informatique pour assurer la connectivité réseau, la sécurité et la disponibilité des services pour l'ensemble de l'organisation. Voici un aperçu des responsabilités clés",
            ],
            [
                'advantages' => [],
                'company_id' => 4,
                'contract_id' => 1,
                'experience' => [
                    "Bacc + 3 ans",
                    "Bien parler et écrire anglais serait un plus",
                ],
                'languages' => ["en", "fr"],
                'location' => "Douala",
                'name' => "Assistante de direction",
                'qualifications' => [],
                'responsibilities' => [
                    "Configuration, installation et maintenance des équipements réseau, y compris les routeurs, les commutateurs, les pare-feu, les contrôleurs WLAN, etc.",
                    "Surveiller les performances du réseau, identifier les goulets d'étranglement et mettre en œuvre des solutions pour optimiser les performances et la disponibilité.",
                    "Gérer la sécurité du réseau en mettant en place et en maintenant des politiques de sécurité, des pare-feu, des VPN et d'autres mesures de sécurité nécessaires.",
                    "Gérer les comptes utilisateurs, les autorisations d'accès et les niveaux de privilège pour garantir la sécurité des données et des ressources réseau.",
                    "Diagnostiquer et résoudre les problèmes réseau, y compris les pannes matérielles, les problèmes de connectivité et les attaques de sécurité.",
                    "Planifier et mettre en œuvre des mises à niveau du réseau, y compris la mise à niveau du matériel, des logiciels et des technologies réseau pour répondre aux besoins de l'entreprise.",
                    "Collaborer avec d'autres équipes informatiques pour soutenir les initiatives de développement et d'expansion de l'infrastructure réseau.",
                ],
                'salary_high' => 220000,
                'salary_low' => 90000,
                'diploma_id' => 1,
                'description' => "En tant qu'administrateur réseau, vous serez responsable de la gestion et de la maintenance de notre infrastructure réseau afin de garantir un fonctionnement fluide et sécurisé. Vous travaillerez en étroite collaboration avec notre équipe informatique pour assurer la connectivité réseau, la sécurité et la disponibilité des services pour l'ensemble de l'organisation. Voici un aperçu des responsabilités clés",
            ],
            [
                'advantages' => [],
                'company_id' => 5,
                'contract_id' => 1,
                'experience' => [
                    "Bacc + 3 ans",
                    "Bien parler et écrire anglais serait un plus",
                ],
                'languages' => ["en", "fr"],
                'location' => "Douala",
                'name' => "Infographiste ",
                'qualifications' => [],
                'responsibilities' => [
                    "Configuration, installation et maintenance des équipements réseau, y compris les routeurs, les commutateurs, les pare-feu, les contrôleurs WLAN, etc.",
                    "Surveiller les performances du réseau, identifier les goulets d'étranglement et mettre en œuvre des solutions pour optimiser les performances et la disponibilité.",
                    "Gérer la sécurité du réseau en mettant en place et en maintenant des politiques de sécurité, des pare-feu, des VPN et d'autres mesures de sécurité nécessaires.",
                    "Gérer les comptes utilisateurs, les autorisations d'accès et les niveaux de privilège pour garantir la sécurité des données et des ressources réseau.",
                    "Diagnostiquer et résoudre les problèmes réseau, y compris les pannes matérielles, les problèmes de connectivité et les attaques de sécurité.",
                    "Planifier et mettre en œuvre des mises à niveau du réseau, y compris la mise à niveau du matériel, des logiciels et des technologies réseau pour répondre aux besoins de l'entreprise.",
                    "Collaborer avec d'autres équipes informatiques pour soutenir les initiatives de développement et d'expansion de l'infrastructure réseau.",
                ],
                'salary_high' => 220000,
                'salary_low' => 90000,
                'diploma_id' => 1,
                'description' => "En tant qu'administrateur réseau, vous serez responsable de la gestion et de la maintenance de notre infrastructure réseau afin de garantir un fonctionnement fluide et sécurisé. Vous travaillerez en étroite collaboration avec notre équipe informatique pour assurer la connectivité réseau, la sécurité et la disponibilité des services pour l'ensemble de l'organisation. Voici un aperçu des responsabilités clés",
            ],
            [
                'advantages' => [],
                'company_id' => 6,
                'contract_id' => 1,
                'experience' => [
                    "Bacc + 3 ans",
                    "Bien parler et écrire anglais serait un plus",
                ],
                'languages' => ["en", "fr"],
                'location' => "Douala",
                'name' => "Monteur video",
                'qualifications' => [],
                'responsibilities' => [
                    "Configuration, installation et maintenance des équipements réseau, y compris les routeurs, les commutateurs, les pare-feu, les contrôleurs WLAN, etc.",
                    "Surveiller les performances du réseau, identifier les goulets d'étranglement et mettre en œuvre des solutions pour optimiser les performances et la disponibilité.",
                    "Gérer la sécurité du réseau en mettant en place et en maintenant des politiques de sécurité, des pare-feu, des VPN et d'autres mesures de sécurité nécessaires.",
                    "Gérer les comptes utilisateurs, les autorisations d'accès et les niveaux de privilège pour garantir la sécurité des données et des ressources réseau.",
                    "Diagnostiquer et résoudre les problèmes réseau, y compris les pannes matérielles, les problèmes de connectivité et les attaques de sécurité.",
                    "Planifier et mettre en œuvre des mises à niveau du réseau, y compris la mise à niveau du matériel, des logiciels et des technologies réseau pour répondre aux besoins de l'entreprise.",
                    "Collaborer avec d'autres équipes informatiques pour soutenir les initiatives de développement et d'expansion de l'infrastructure réseau.",
                ],
                'salary_high' => 220000,
                'salary_low' => 90000,
                'diploma_id' => 1,
                'description' => "En tant qu'administrateur réseau, vous serez responsable de la gestion et de la maintenance de notre infrastructure réseau afin de garantir un fonctionnement fluide et sécurisé. Vous travaillerez en étroite collaboration avec notre équipe informatique pour assurer la connectivité réseau, la sécurité et la disponibilité des services pour l'ensemble de l'organisation. Voici un aperçu des responsabilités clés",
            ],
        ];

        foreach ($jobs as $job) {
            Job::create($job);
        }
    }
}
