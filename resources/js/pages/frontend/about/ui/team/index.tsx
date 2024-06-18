import { Loading, Section, SectionTitle, TransparentTitle } from "@/components";
import { useTeam } from "@/hooks";
import Block from "./block";

export default function Team() {
    const { loading, data: team } = useTeam();

    if (loading) return <Loading />;
    return (
        <div className="overflow-clip relative pb-20 bg-stone-100">
            <TransparentTitle className="absolute top-0 right-0 translate-x-1/2">
                Notre équipe
            </TransparentTitle>

            <Section>
                <SectionTitle className="!text-center">
                    Notre <span>équipe</span>
                </SectionTitle>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8 mt-4 lg:mt-8">
                    {team?.map((member, index) => (
                        <Block
                            key={"member-" + member.id + "-" + index}
                            index={index}
                            {...member}
                        />
                    ))}
                </div>
            </Section>
        </div>
    );
}
