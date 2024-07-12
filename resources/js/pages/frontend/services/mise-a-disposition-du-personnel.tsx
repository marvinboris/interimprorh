import { Button, Header, Polygon1, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import { Trans, useTranslation } from "react-i18next";

export function PageServiceTeam() {
    const { t } = useTranslation();

    return (
        <>
            <Header>{t("Provision of Staff")}</Header>

            <div className="overflow-clip relative">
                <Section>
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 pt-24">
                        <div>
                            <SectionTitle>
                                <Trans i18nKey="Provision<br /><2>of Staff</2>">
                                    Provision
                                    <br />
                                    <span>of Staff</span>
                                </Trans>
                            </SectionTitle>

                            <div className="lg:text-lg text-justify text-body space-y-4 mt-4">
                                <p>
                                    Bénéficiez de l’expertise et de la
                                    flexibilité de notre équipe experte. Que
                                    vous ayez besoin de renforcer votre équipe
                                    pour un projet ponctuel, pour faire face à
                                    un accroissement d’activité ou pour pallier
                                    une absence, nous vous proposons des profils
                                    adaptés à vos besoins et à votre secteur
                                    d’activité. Nous nous occupons de toutes les
                                    formalités administratives et vous
                                    garantissons un suivi personnalisé tout au
                                    long de la mission.  
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
        </>
    );
}
