import { Button, CustomSelect, Loading, Section } from "@/components";
import { fetch } from "@/services";
import { cn } from "@/utils";
import { Job } from "@types";
import { usePageSearchContext } from "../context";
import { Category, CloseCircle, Location } from "iconsax-react";
import React from "react";
import { useCompanyActivities } from "@/hooks";
import { useCountriesContext } from "@/contexts";
import { useTranslation } from "react-i18next";
import { DEFAULT_COUNTRY } from "@/config";

export default function Header() {
    const { data, setData } = usePageSearchContext();
    const { options: specialtyOptions } = useCompanyActivities();
    const { options: countryOptions } = useCountriesContext();
    const { t } = useTranslation();

    const [country, setCountry] = React.useState(DEFAULT_COUNTRY.toUpperCase());
    const [loading, setLoading] = React.useState(false);
    const [region, setRegion] = React.useState("");
    const [specialty, setSpecialty] = React.useState("");

    const allFilters = [
        "Date posted",
        "Job type",
        "City",
        "Job language",
    ] as const;
    const [activeFilter, setActiveFilter] =
        React.useState<(typeof allFilters)[number]>();

    const onClearFilter = () => {
        setCountry("");
        setRegion("");
        setSpecialty("");
    };

    const onSearch = () => {
        const handle = async () => {
            setLoading(true);

            const jobs = await fetch<Job[]>({
                resource: "jobs",
                params: { country, region, specialty },
            });
            if (jobs) setData(jobs);

            setLoading(false);
        };

        handle();
    };

    React.useEffect(onSearch, []);

    if (loading) return <Loading />;
    return (
        <header className="pt-4 lg:pt-8 pb-11 bg-stone-100/50">
            <Section className="space-y-4 lg:space-y-6">
                <h1 className="text-2xl font-bold">{t("Job search")}</h1>

                <div className="border border-neutral-200 bg-white rounded-xl p-3 gap-3 flex flex-col lg:flex-row">
                    <div className="grid lg:grid-cols-3 gap-3 lg:w-3/5 lg:divide-x-4 divide-neutral-200 *:*:*:*:*:!border-0 lg:*:pl-3">
                        <div>
                            <CustomSelect
                                name="specialty"
                                value={specialty}
                                onChange={setSpecialty}
                                options={specialtyOptions}
                                placeholder={t("Select specialty")}
                                addon={
                                    <Category className="size-6 text-primary mr-3" />
                                }
                            />
                        </div>

                        <div>
                            <CustomSelect
                                options={countryOptions}
                                name="country"
                                value={country}
                                onChange={setCountry}
                                placeholder={t("Country")}
                                addon={
                                    <Location className="size-6 text-primary mr-3" />
                                }
                            />
                        </div>

                        <div>
                            <CustomSelect
                                options={[
                                    { value: "1", label: "Adamaoua" },
                                    { value: "2", label: "Centre" },
                                    { value: "3", label: "Est" },
                                    { value: "4", label: "Extrême-Nord" },
                                    { value: "5", label: "Littoral" },
                                    { value: "6", label: "Nord" },
                                    { value: "7", label: "Nord-Ouest" },
                                    { value: "8", label: "Ouest" },
                                    { value: "9", label: "Sud" },
                                    { value: "10", label: "Sud-Ouest" },
                                ]}
                                name="region"
                                value={region}
                                onChange={setRegion}
                                placeholder={t("Region")}
                                addon={
                                    <Location className="size-6 text-primary mr-3" />
                                }
                            />
                        </div>
                    </div>

                    <div className="lg:ml-auto flex flex-col lg:flex-row gap-3">
                        <Button
                            color="link"
                            onClick={onClearFilter}
                            className="!text-danger font-bold"
                        >
                            <CloseCircle className="size-4" />
                            <span className="underline">
                                {t("Clear filter")}
                            </span>
                        </Button>

                        <Button onClick={onSearch}>{t("Search")}</Button>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:flex gap-3">
                    {allFilters.map((filter) => (
                        <div
                            key={"filter-" + filter}
                            className={cn(
                                "border h-11 min-w-32 flex items-center px-4 rounded-lg text-sm cursor-pointer",
                                activeFilter === filter
                                    ? "border-primary/20 text-primary bg-primary/5 font-semibold"
                                    : "border-neutral-200 bg-stone-100 font-medium"
                            )}
                            onClick={() =>
                                setActiveFilter(
                                    activeFilter === filter ? undefined : filter
                                )
                            }
                        >
                            {t(filter)}
                        </div>
                    ))}

                    <div className="lg:ml-auto lg:text-lg col-span-2">
                        {t("Search results")} :{" "}
                        <span className="text-primary font-medium underline">
                            {data.length} {t("jobs found")}
                        </span>
                    </div>
                </div>
            </Section>
        </header>
    );
}
