import { Button, Section, SectionTitle, TransparentTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import Svg from "./svg";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

export default function Career() {
    const { t } = useTranslation();

    return (
        <Section className="overflow-clip lg:overflow-visible">
            <TransparentTitle>{t("Career")}</TransparentTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mt-24 lg:mt-0">
                <div className="lg:pt-12">
                    <SectionTitle>
                        <Trans i18nKey="Your <1>Career</1>">
                            Your <span>Career</span>
                        </Trans>
                    </SectionTitle>

                    <div className="lg:text-lg text-body text-justify space-y-4 mt-4 lg:mt-6">
                        <p>
                            {t(
                                "Plus qu’une agence d’intérim, nous sommes un partenaire qui vous écoute, vous conseille et vous oriente vers les meilleures opportunités. Que vous soyez à la recherche d’un CDI, d’un CDD, d’une mission temporaire ou d’une formation qualifiante, nous vous proposons des offres adaptées à votre profil et à vos attentes."
                            )}
                        </p>
                    </div>

                    <div className="mt-8 lg:mt-20 text-center lg:text-left">
                        <Link to="/careers">
                            <Button size="xl" div>
                                <span>{t("Read more")}</span>
                                <ArrowRight className="size-6" />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="h-[320px] lg:h-[432px] relative lg:static">
                    <Svg className="h-full lg:h-auto mt-4 lg:-mt-52 -ml-6 lg:-ml-60 xl:-ml-40 absolute lg:static top-1/2 left-1/2 -translate-y-1/2 lg:translate-y-0 -translate-x-1/2 lg:translate-x-0 scale-[2] lg:scale-100" />
                </div>
            </div>
        </Section>
    );
}
