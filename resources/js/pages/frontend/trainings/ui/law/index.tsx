import { Button, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import Frame from "../frame";
import { Link } from "react-router-dom";

export default function Law() {
    return (
        <Section>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <SectionTitle>
                        Juridique <span>&</span>
                        <br /> <span>Droit social</span>
                    </SectionTitle>

                    <p className="mt-4 lg:mt-0">
                        Devenir un leader sous régional en recrutant et en
                        développant les meilleurs talents camerounais et
                        africains, en construisant une relation personnelle et
                        durable avec nos clients au Cameroun et dans la
                        sous-région. Apporter notre contribution à la création
                        de valeur pour le gouvernement est notre crédo.
                    </p>

                    <div className="mt-8 lg:mt-11 text-center lg:text-left">
                        <Link to="/contact">
                            <Button size="xl">
                                <span>Contactez-nous</span>
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
