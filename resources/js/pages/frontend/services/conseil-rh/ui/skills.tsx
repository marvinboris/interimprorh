import { Button, Polygon1, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import { Trans, useTranslation } from "react-i18next";

export default function Skills() {
    const { t } = useTranslation();

    return (
        <div className="overflow-clip relative">
            <Section>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 pt-24">
                    <div>
                        <SectionTitle>
                            <Trans i18nKey="Assessment of <br />skills<br />(Professions and Cognitive)">
                                Assessment of <br />
                                skills
                                <br />
                                (Professions and Cognitive)
                            </Trans>
                        </SectionTitle>

                        <div className="lg:text-lg text-justify text-body space-y-4 mt-4">
                            <p>
                                Nos tests d’aptitudes cognitives, vous
                                garantissent une meilleure connaissance de « soi
                                » et du potentiel intellectuel/émotionnel de vos
                                collaborateurs afin de faciliter le pilotage de
                                votre système de la gestion de performance. Nous
                                vous permettons de clarifier les missions de vos
                                collaborateurs et de mesurer leurs contributions
                                à la performance de l’entreprise, fixons les
                                objectifs pour l’amélioration des performances
                                individuelles et collectives, analysons les
                                écarts entre les compétences requises au poste
                                et les compétences du collaborateur, définissons
                                les moyens à mettre en œuvre pour l’atteinte de
                                vos objectifs, nous identifions les attentes des
                                collaborateurs au regard des objectifs de
                                l’entreprise
                            </p>
                        </div>

                        <div className="mt-8 lg:mt-20 text-center lg:text-left">
                            <Button size="xl">
                                <span>{t("Contact us")}</span>
                                <ArrowRight className="size-6" />
                            </Button>
                        </div>
                    </div>

                    <div>
                        <Polygon1 />
                    </div>
                </div>
            </Section>
        </div>
    );
}
