import { Loading, Section, SectionTitle, TransparentTitle } from "@/components";
import { useServices } from "@/hooks";
import Block from "./block";
import { TwoUsers } from "react-iconly";

export default function Services() {
  const { data: services, loading } = useServices();

  if (loading) return <Loading />;
  return (
    <Section className="mt-24 lg:mt-0">
      <TransparentTitle className="text-center">Nos services</TransparentTitle>

      <SectionTitle className="!text-center">
        Nos <span>services</span>
      </SectionTitle>

      <div className="mt-4 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 lg:gap-y-9">
        {services?.map((service, index) => (
          <Block
            key={"service-block-" + service.id + "-" + index}
            icon={[TwoUsers, TwoUsers, TwoUsers, TwoUsers, TwoUsers][index]}
            index={index}
            {...service}
          />
        ))}
      </div>
    </Section>
  );
}
