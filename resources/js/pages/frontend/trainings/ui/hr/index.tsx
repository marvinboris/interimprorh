import { Button, Section, SectionTitle } from "@/components";
import Frame from "../frame";
import { ArrowRight, TickCircle } from "iconsax-react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

export default function HR() {
    const { t } = useTranslation();

    return (
        <Section>
            <SectionTitle>
                <Trans i18nKey="<0>Human resource</0> <br /> management">
                    <span>Human resource</span> <br /> management
                </Trans>
            </SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 lg:mt-12">
                <div className="lg:text-lg text-justify">
                    <p>
                        La formation en Gestion des Ressources Humaines (GRH)
                        vise à développer les compétences nécessaires pour gérer
                        efficacement le capital humain d'une organisation. Voici
                        un court résumé de cette formation avec cinq avantages
                        principaux :
                    </p>

                    <ul className="mt-4 lg:mt-9 lg:space-y-2.5">
                        <Li>Compréhension approfondie des pratiques RH</Li>
                        <Li>Développement de compétences en leadership</Li>
                        <Li>Adaptabilité aux besoins du marché du travail</Li>
                        <Li>Gestion efficace des talents</Li>
                        <Li>Amélioration de la culture organisationnelle</Li>
                    </ul>

                    <div className="mt-8 lg:mt-14 text-center lg:text-left">
                        <Link to="/contact">
                            <Button size="xl" div>
                                <span>{t("Subscribe")}</span>
                                <ArrowRight size={20} />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div>
                    <Frame src="/images/c64fd660f757135abb8361f31312d977.webp" />
                </div>
            </div>
        </Section>
    );
}

function Li({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-center gap-3">
            <TickCircle className="size-5 text-primary" />
            <div>{children}</div>
        </li>
    );
}
