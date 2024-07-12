import { Button, Header, Polygon1, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import { Trans, useTranslation } from "react-i18next";

export function PageServiceInterim() {
    const { t } = useTranslation();

    return (
        <>
            <Header>
                {t("Temporary employment and placement of workers")}
            </Header>

            <div className="overflow-clip relative">
                <Section>
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 pt-24">
                        <div>
                            <SectionTitle>
                                <Trans i18nKey="Temporary employment<br />and placement<3>of workers</3>">
                                    Temporary employment
                                    <br />
                                    and placement<span>of workers</span>
                                </Trans>
                            </SectionTitle>

                            <div className="lg:text-lg text-justify text-body space-y-4 mt-4">
                                <p>
                                    Contactez-nous et confiez-nous votre
                                    activité : <br />
                                    <br />
                                    INTERIM PRO RH mobilise la main d’œuvre pour
                                    assurer votre production sans que vous ne
                                    soyez engagés vis-à-vis des salariés par un
                                    contrat de travail. Par ailleurs, notre
                                    expertise et notre expérience en matière de
                                    Sous-traitance vous permettent recentrer sur
                                    votre cœur de métier et sur vos activités
                                    stratégiques. Nous assumons les charges
                                    légales, matérielles et logistiques liés à
                                    vos activités.Baissez les couts de vos
                                    charges et améliorez la qualité de vos
                                    services en nous confiant votre activité.
                                    Gérez avec plus de souplesse et de fluidité
                                    vos activités.
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
