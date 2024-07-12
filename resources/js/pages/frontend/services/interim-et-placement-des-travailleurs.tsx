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
                                <p>{t("Services/Placement")}</p>
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
