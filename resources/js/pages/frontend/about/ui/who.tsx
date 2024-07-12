import {
    Button,
    Polygon1,
    Section,
    SectionTitle,
    TransparentTitle,
} from "@/components";
import { ArrowRight } from "iconsax-react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Who() {
    const { t } = useTranslation();

    return (
        <div className="overflow-x-clip relative">
            <Section>
                <TransparentTitle className="absolute top-0 bottom-0 translate-x-1/2 truncate">
                    <Trans i18nKey="Who <1>are we ?</1>">
                        Who <span>are we ?</span>
                    </Trans>
                </TransparentTitle>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 pt-8 lg:pt-24">
                    <div>
                        <SectionTitle>
                            <Trans i18nKey="Who <1>are we ?</1>">
                                Who <span>are we ?</span>
                            </Trans>
                        </SectionTitle>

                        <div className="lg:text-lg text-justify text-body space-y-4 mt-4">
                            <p>{t("About/Who/1")}</p>

                            <p>{t("About/Who/2")}</p>

                            <p>{t("About/Who/3")}</p>
                        </div>

                        <div className="mt-8 lg:mt-20 text-center lg:text-left">
                            <Link to="/contact">
                                <Button size="xl" div>
                                    <span>
                                        <Trans i18nKey="Contact <1>us</1>">
                                            Contact <span>us</span>
                                        </Trans>
                                    </span>
                                    <ArrowRight className="size-6" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative lg:static h-[320px] lg:h-auto order-2 lg:order-1">
                        <Polygon1 />
                    </div>
                </div>
            </Section>
        </div>
    );
}
