import { Button, Polygon1, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";

export default function Mission() {
    return (
        <div className="overflow-x-clip relative">
            <Section>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 pt-24">
                    <div className="relative lg:static h-[320px] lg:h-auto order-2 lg:order-1">
                        <Polygon1 />
                    </div>

                    <div className="order-1 lg:order-2">
                        <SectionTitle>
                            Notre <span>mission</span>
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
                                    <span>{"Contactez-nous"}</span>
                                    <ArrowRight className="size-6" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
