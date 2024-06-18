import { Button, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import Frame from "../frame";
import { Link } from "react-router-dom";

export default function Logistics() {
    return (
        <Section>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <SectionTitle>
                        Logistique <span>&</span>
                        <br /> <span>Transport</span>
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
                            <Button size="xl" div>
                                <span>Contactez-nous</span>
                                <ArrowRight size={20} />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div>
                    <Frame src="/images/270ed0ec762588b1345bd394dff4516f.webp" />
                </div>
            </div>
        </Section>
    );
}
