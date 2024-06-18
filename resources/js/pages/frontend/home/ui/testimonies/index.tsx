import { Loading, SectionTitle, TransparentTitle } from "@/components";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Block from "./block";
import { useTestimonies } from "@/hooks";

export default function Testimonies() {
    const { data: testimonies, loading } = useTestimonies();

    if (loading) return <Loading />;
    return (
        <section className="overflow-clip text-center mt-24">
            <TransparentTitle>Témoignages</TransparentTitle>

            <SectionTitle big className="!text-center">
                Ils parlent <span>de nous</span>
            </SectionTitle>

            <h3 className="font-medium text-xl lg:text-2xl mt-2">
                Témoignages de plusieurs utilisateurs
            </h3>

            <div className="overflow-auto lg:pb-4 mt-4 lg:mt-14">
                <div className="container-auto grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-4">
                    {testimonies?.map((testimony, index) => (
                        <Block
                            key={
                                "testimony-block-" + testimony.id + "-" + index
                            }
                            {...testimony}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-12 hidden lg:flex gap-6 justify-center">
                <button
                    role="button"
                    aria-label="Previous"
                    className="size-11 flex items-center justify-center rounded-full bg-primary/10 text-primary"
                >
                    <ArrowLeft className="size-4" />
                </button>
                <button
                    role="button"
                    aria-label="Next"
                    className="size-11 flex items-center justify-center rounded-full bg-primary text-white"
                >
                    <ArrowRight className="size-4" />
                </button>
            </div>
        </section>
    );
}
