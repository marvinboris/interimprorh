import { Button, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import Frame from "../frame";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

export default function Logistics() {
    const { t } = useTranslation();

    return (
        <Section>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <SectionTitle>
                        <Trans i18nKey="Logistics <1>&</1> <br /> <3>Transport</3>">
                            Logistics <span>&</span> <br />{" "}
                            <span>Transport</span>
                        </Trans>
                    </SectionTitle>

                    <p className="mt-4 lg:mt-0">{t("Trainings/Logistics")}</p>

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

                <div>
                    <img src="/images/270ed0ec762588b1345bd394dff4516f.webp" />
                </div>
            </div>
        </Section>
    );
}
