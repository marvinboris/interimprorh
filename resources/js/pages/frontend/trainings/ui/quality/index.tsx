import { Button, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import Frame from "../frame";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

export default function Quality() {
    const { t } = useTranslation();

    return (
        <Section>
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="order-2 lg:order-1">
                    <img src="/images/7692093c7321875bfd1d4708872c72bd.webp" />
                </div>

                <div className="order-1 lg:order-2">
                    <SectionTitle>
                        <Trans i18nKey="Quality, Health, <br /> <2>Safety and</2> <br /> <4>Environment</4>">
                            Quality, Health, <br /> <span>Safety and</span>{" "}
                            <br /> <span>Environment</span>
                        </Trans>
                    </SectionTitle>

                    <p className="mt-4 lg:mt-0">{t("Trainings/Quality/1")}</p>

                    <p>{t("Trainings/Quality/2")}</p>

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
