import { Button, Polygon1, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

export default function Vision() {
    return (
        <div className="overflow-x-clip relative">
            <Section>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 pt-24">
                    <div>
                        <SectionTitle>
                            <Trans i18nKey="Our <1>vision</1>">
                                Our <span>vision</span>
                            </Trans>
                        </SectionTitle>

                        <div className="lg:text-lg text-justify text-body space-y-4 mt-4">
                            <p>
                                Devenir un leader sous régional en recrutant et
                                en développant les meilleurs talents Camerounais
                                et Africains, en construisant une relation
                                personnelle et durable avec nos clients au
                                Cameroun et dans la sous-région. Apporter notre
                                contribution à la création de valeur pour le
                                gouvernement est notre crédo
                            </p>
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

                    <div className="relative lg:static h-[320px] lg:h-auto">
                        <Polygon1 />
                    </div>
                </div>
            </Section>
        </div>
    );
}
