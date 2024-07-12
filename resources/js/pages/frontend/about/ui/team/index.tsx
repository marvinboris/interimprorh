import { Loading, Section, SectionTitle, TransparentTitle } from "@/components";
import { useTeam } from "@/hooks";
import Block from "./block";
import { Trans } from "react-i18next";

export default function Team() {
    const { loading, data: team } = useTeam();

    if (loading) return <Loading />;
    return (
        <div className="overflow-clip relative py-20 bg-stone-100">
            <TransparentTitle className="absolute top-0 right-0 translate-x-1/2">
                <Trans i18nKey="Our <1>team</1>">
                    Our <span>team</span>
                </Trans>
            </TransparentTitle>

            <Section>
                <SectionTitle className="!text-center">
                    <Trans i18nKey="Our <1>team</1>">
                        Our <span>team</span>
                    </Trans>
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
