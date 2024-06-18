import { PageSearchContextProvider } from "./context";
import Details from "./ui/details";
import Header from "./ui/header";
import List from "./ui/list";
import { Section } from "@/components";

export function PageSearch() {
  return (
    <PageSearchContextProvider>
      <div className="bg-stone-100 flex-1">
        <Header />

        <Section className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 pb-20">
          <div className="lg:col-span-2">
            <List />
          </div>
          <div className="lg:col-span-3">
            <Details />
          </div>
        </Section>
      </div>
    </PageSearchContextProvider>
  );
}
