import { Button, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import Frame from "../frame";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

export default function Law() {
    const { t } = useTranslation();

    return (
        <Section>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <SectionTitle>
                        <Trans i18nKey="Legal <1>&</1> <br /> <3>Social law</3>">
                            Legal <span>&</span> <br /> <span>Social law</span>
                        </Trans>
                    </SectionTitle>

                    <p className="mt-4 lg:mt-0">{t("Trainings/Legal")}</p>

                    <div className="mt-8 lg:mt-11 text-center lg:text-left">
                        <Link to="/contact">
                            <Button size="xl">
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

                <div>
                    <Frame src="/images/6fa015d31903931d9f9e8c057c569413.webp" />
                </div>
            </div>
        </Section>
    );
}
