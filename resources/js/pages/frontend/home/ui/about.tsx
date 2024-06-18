import {
    Button,
    Polygon1,
    Section,
    SectionTitle,
    TransparentTitle,
} from "@/components";
import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <Section id="about" className="overflow-clip lg:overflow-visible">
            <TransparentTitle className="text-center">
                A propos
            </TransparentTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mt-24">
                <div className="order-1 lg:order-2">
                    <Polygon1 />
                </div>

                <div className="order-2 lg:order-1">
                    <SectionTitle>
                        A propos <span>de nous</span>
                    </SectionTitle>

                    <div className="lg:text-lg text-body space-y-4 mt-4">
                        <p>
                            <span className="font-bold">INTERIM PRO RH</span>
                             est une entreprise fondée par un groupe de cadres
                            de divers secteurs d’activités confrontés tout au
                            long de leurs différentes carrières aux
                            problématiques ressources humaines.
                        </p>

                        <p>
                            <span className="font-bold">INTERIM PRO RH</span>
                             vise à s’établir comme un fournisseur de premier
                            plan d’employés pour diverses organisations quelque
                            soit leur secteur d’activité.
                        </p>
                    </div>

                    <div className="mt-8 lg:mt-20 text-center lg:text-left">
                        <Link to="/about">
                            <Button size="xl" div>
                                <span>{"Lire la suite"}</span>
                                <ArrowRight className="size-6" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
}
