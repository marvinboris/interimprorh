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
                    <p>{t("Trainings/HR")}</p>

                    <ul className="mt-4 lg:mt-9 lg:space-y-2.5">
                        <Li>{t("Trainings/HR/1")}</Li>
                        <Li>{t("Trainings/HR/2")}</Li>
                        <Li>{t("Trainings/HR/3")}</Li>
                        <Li>{t("Trainings/HR/4")}</Li>
                        <Li>{t("Trainings/HR/5")}</Li>
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
