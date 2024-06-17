import {
    Button,
    Polygon1,
    Section,
    SectionTitle,
    TransparentTitle,
} from "@/components";
import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";

export default function Who() {
    return (
        <div className="overflow-x-clip relative">
            <Section>
                <TransparentTitle className="absolute top-0 bottom-0 translate-x-1/2 truncate">
                    Qui sommes-nous
                </TransparentTitle>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 pt-8 lg:pt-24">
                    <div>
                        <SectionTitle className="text-center lg:text-left">
                            Qui <span>sommes-nous ?</span>
                        </SectionTitle>

                        <div className="lg:text-lg text-justify text-body space-y-4 mt-4">
                            <p>
                                <span>INTERIM PRO</span> RH est une entreprise
                                fondée par un groupe de cadres de divers
                                secteurs d’activités confrontés tout au long de
                                leurs différentes carrières aux problématiques
                                ressources humaines.
                            </p>

                            <p>
                                <span>INTERIM PRO RH</span> vise à s’établir
                                comme un fournisseur de premier plan d’employés
                                pour diverses organisations quelque soit leur
                                secteur d’activité. Aujourd’hui chez INTERIM PRO
                                RH, nous nous concentrons sur la mise à
                                disposition de main d’œuvre aux entreprises
                                situées au Cameroun et dans la sous-région
                                Afrique centrale.
                            </p>

                            <p>
                                Notre compagnie reçoit des centaines de
                                candidatures chaque jour et offre une
                                opportunité unique aux employeurs et aux
                                demandeurs d’emploi de se rencontrer pour la
                                réussite de leur projet. Pour ce faire , nous
                                mettons à la disposition à travers le digital un
                                canal de communication flexible et efficace pour
                                les employeurs et futurs employés.
                                <br />
                                <br />
                                Nous nous appuyons sur une vaste base de données
                                remplis de profils divers et expérimentés,
                                classés par secteur d’activité. Nous disposons
                                d’une équipe compétente en ce qui concerne le
                                traitement efficace de tout projet de
                                recrutement et nous veillons à fournir aux
                                candidats le poste le plus approprié.
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

                    <div className="relative lg:static h-[320px] lg:h-auto">
                        <Polygon1 />
                    </div>
                </div>
            </Section>
        </div>
    );
}
