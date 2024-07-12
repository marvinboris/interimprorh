import {
    Button,
    Polygon1,
    Section,
    SectionTitle,
    TransparentTitle,
} from "@/components";
import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    return (
        <Section id="about" className="overflow-clip lg:overflow-visible">
            <TransparentTitle className="text-center">
                {t("About")}
            </TransparentTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mt-24">
                <div className="order-1 lg:order-2">
                    <Polygon1 />
                </div>

                <div className="order-2 lg:order-1">
                    <SectionTitle>
                        <Trans i18nKey="About <1>us</1>">
                            About <span>us</span>
                        </Trans>
                    </SectionTitle>

                    <div className="lg:text-lg text-body space-y-4 mt-4">
                        <p>
                            <Trans i18nKey="<0>INTERIM PRO RH</0>  est une entreprise fondée par un groupe de cadres de divers secteurs d’activités confrontés tout au long de leurs différentes carrières aux problématiques ressources humaines.">
                                <span className="font-bold">
                                    INTERIM PRO RH
                                </span>
                                 est une entreprise fondée par un groupe de
                                cadres de divers secteurs d’activités confrontés
                                tout au long de leurs différentes carrières aux
                                problématiques ressources humaines.
                            </Trans>
                        </p>

                        <p>
                            <Trans i18nKey="<0>INTERIM PRO RH</0>  vise à s’établir comme un fournisseur de premier plan d’employés pour diverses organisations quelque soit leur secteur d’activité.">
                                <span className="font-bold">
                                    INTERIM PRO RH
                                </span>
                                 vise à s’établir comme un fournisseur de
                                premier plan d’employés pour diverses
                                organisations quelque soit leur secteur
                                d’activité.
                            </Trans>
                        </p>
                    </div>

                    <div className="mt-8 lg:mt-20 text-center lg:text-left">
                        <Link to="/about">
                            <Button size="xl" div>
                                <span>{t("Read more")}</span>
                                <ArrowRight className="size-6" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
}
