import { Button, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import Frame from "../frame";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

export default function Communication() {
    const { t } = useTranslation();

    return (
        <Section>
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="order-2 lg:order-1">
                    <Frame src="/images/35483ef05bd9a822e47f67c32b1bbb08.webp" />
                </div>

                <div className="order-1 lg:order-2">
                    <SectionTitle>
                        <Trans i18nKey="Communication / <br /> <2>Digital marketing</2>">
                            Communication / <br />{" "}
                            <span>Digital marketing</span>
                        </Trans>
                    </SectionTitle>

                    <p className="mt-4 lg:mt-0">
                        {t("Trainings/Communication/1")}
                    </p>

                    <p>{t("Trainings/Communication/2")}</p>

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
