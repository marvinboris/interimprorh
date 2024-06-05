<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FAQSeeder extends Seeder
{
    public function run()
    {
        $faqs = [
            [
                'question' => "Est-ce que je peux postuler à des offres d'emploi directement sur votre site ?",
                'answer' => "Réponse : Oui, une fois que vous avez trouvé une offre d'emploi qui vous intéresse, vous pouvez postuler directement via notre plateforme. Il vous suffit de cliquer sur le bouton \"Postuler\" et de suivre les instructions pour soumettre votre candidature, généralement en téléchargeant votre CV et en remplissant un formulaire de candidature en ligne.",
            ],
            [
                'question' => "Quels types d'entreprises publient des offres d'emploi sur votre site ?",
                'answer' => "Réponse : Oui, une fois que vous avez trouvé une offre d'emploi qui vous intéresse, vous pouvez postuler directement via notre plateforme. Il vous suffit de cliquer sur le bouton \"Postuler\" et de suivre les instructions pour soumettre votre candidature, généralement en téléchargeant votre CV et en remplissant un formulaire de candidature en ligne.",
            ],
            [
                'question' => "Comment puis-je m'inscrire sur votre site pour trouver un emploi ?",
                'answer' => "Réponse : Oui, une fois que vous avez trouvé une offre d'emploi qui vous intéresse, vous pouvez postuler directement via notre plateforme. Il vous suffit de cliquer sur le bouton \"Postuler\" et de suivre les instructions pour soumettre votre candidature, généralement en téléchargeant votre CV et en remplissant un formulaire de candidature en ligne.",
            ],
            [
                'question' => "Est-ce que je peux postuler à des offres d'emploi directement sur votre site ?",
                'answer' => "Réponse : Oui, une fois que vous avez trouvé une offre d'emploi qui vous intéresse, vous pouvez postuler directement via notre plateforme. Il vous suffit de cliquer sur le bouton \"Postuler\" et de suivre les instructions pour soumettre votre candidature, généralement en téléchargeant votre CV et en remplissant un formulaire de candidature en ligne.",
            ],
            [
                'question' => "Comment puis-je obtenir de l'aide si j'ai des questions ou des problèmes avec mon compte ou ma candidature ?",
                'answer' => "Réponse : Oui, une fois que vous avez trouvé une offre d'emploi qui vous intéresse, vous pouvez postuler directement via notre plateforme. Il vous suffit de cliquer sur le bouton \"Postuler\" et de suivre les instructions pour soumettre votre candidature, généralement en téléchargeant votre CV et en remplissant un formulaire de candidature en ligne.",
            ],
        ];

        DB::table('f_a_q_s')->insert($faqs);
    }
}
