import { Button, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import Frame from "../frame";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

export default function Accounting() {
    const { t } = useTranslation();

    return (
        <Section>
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="order-2 lg:order-1">
                    <Frame src="/images/518fe64bd599e9cf9f44f3562c3ca322.webp" />
                </div>

                <div className="order-1 lg:order-2">
                    <SectionTitle>
                        <Trans i18nKey="Accounting <br /> <2>& Finances</2>">
                            Accounting <br /> <span>& Finances</span>
                        </Trans>
                    </SectionTitle>

                    <p className="mt-4 lg:mt-0">
                        Répondre aux besoins de recherche d'emploi et carrière
                        des candidats individuels en les aidant à organiser leur
                        recherche d'emploi au Cameroun et dans la sous-région.
                    </p>

                    <p>
                        Avec notre système d'application en ligne, les candidats
                        peuvent : candidater à un poste, déposer leur CV ou
                        simplement laisser leur numéro de téléphone et / ou
                        e-mail. Nous nous chargeons de les recontacter par la
                        suite.
                    </p>

                    <div className="mt-8 lg:mt-11 text-center lg:text-left">
                        <Link to="/contact">
                            <Button size="xl" div>
                                <span>
                                    <Trans i18nKey="Contact <1>us</1>">
                                        Contact <span>us</span>
                                    </Trans>
                                </span>
                                <ArrowRight size={20} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
}
