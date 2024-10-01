import {
    Calendar,
    CloseCircle,
    Document,
    Location,
    Moneys,
    TickCircle,
} from "iconsax-react";
import React from "react";
import { cn } from "@/utils";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { Company, Contract, Job, Message } from "@types";
import { Transition } from "@/components";

export default function Details({
    job: selected,
    setShow,
}: {
    job: Job | undefined;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { t } = useTranslation();

    const allTabs = [
        "Responsibilities",
        "Qualifications",
        "Advantages",
    ] as const;
    const [activeTab, setActiveTab] = React.useState<(typeof allTabs)[number]>(
        allTabs[0]
    );

    if (!selected) return null;
    const {
        company,
        name,
        advantages,
        contract,
        created_at,
        experience,
        languages,
        location,
        qualifications,
        responsibilities,
        description,
        salary_high,
        salary_low,
    } = selected;

    return (
        <Transition show={Boolean(selected)}>
            <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50">
                <div
                    className="inset-0 absolute -z-10"
                    onClick={() => setShow(false)}
                />

                <div className="lg:border border-neutral-200 bg-white lg:rounded-3xl *:p-6 divide-y divide-neutral-200 fixed lg:static inset-0 overflow-auto top-[90px] w-full max-w-2xl">
                    <header>
                        <div className="flex items-start gap-4">
                            <div className="size-16 rounded-lg bg-stone-100"></div>

                            <div className="flex-1 self-center">
                                <div className="font-bold text-3xl">
                                    {
                                        (
                                            company as unknown as
                                                | Company
                                                | undefined
                                        )?.name
                                    }
                                </div>
                            </div>

                            <div className="lg:hidden">
                                <CloseCircle
                                    variant="Bulk"
                                    onClick={() => setShow(false)}
                                    className="size-5 text-body cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2 *:bg-stone-100 *:h-8 text-xs font-bold *:flex *:items-center *:rounded-md *:gap-2.5 *:px-2.5">
                            <div className="text-primary !bg-primary/5">
                                <Moneys className="size-3.5" />
                                <span>
                                    {salary_low} - {salary_high} XAF
                                </span>
                            </div>
                            <div>
                                <Location className="size-3.5" />
                                <span>{location}</span>
                            </div>
                            <div>
                                <Calendar className="size-3.5" />
                                <span>
                                    {
                                        (
                                            contract as unknown as
                                                | Contract
                                                | undefined
                                        )?.name
                                    }
                                </span>
                            </div>
                            <div>
                                <Calendar className="size-3.5" />
                                <span>{moment(created_at).fromNow()}</span>
                            </div>
                            <div>
                                <Calendar className="size-3.5" />
                                <span className="uppercase">
                                    {languages.join(" & ")}
                                </span>
                            </div>
                        </div>
                    </header>

                    <main>
                        <div className="font-bold text-xl">{name}</div>

                        <div className="mt-3.5 text-sm">{description}</div>

                        <div className="pt-8 flex overflow-x-auto gap-3.5 *:h-11 text-sm font-bold *:flex *:items-center *:rounded-md *:gap-2.5 *:px-2.5">
                            {allTabs.map((tab) => (
                                <div
                                    key={"tab-" + selected.id + "-" + tab}
                                    className={cn(
                                        "cursor-pointer",
                                        activeTab === tab
                                            ? "text-primary !bg-primary/5 relative"
                                            : "bg-stone-100"
                                    )}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {activeTab === tab ? (
                                        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
                                            <TickCircle
                                                variant="Bold"
                                                className="size-5 text-primary"
                                            />
                                        </div>
                                    ) : null}
                                    <Document className="size-5" />
                                    {t(tab)}
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 space-y-6">
                            {
                                {
                                    Responsibilities: responsibilities.map(
                                        (responsibility, index) => (
                                            <Li
                                                key={
                                                    "job-responsibility-" +
                                                    responsibility +
                                                    "-" +
                                                    index
                                                }
                                            >
                                                {responsibility}
                                            </Li>
                                        )
                                    ),
                                    Qualifications: qualifications.map(
                                        (qualification, index) => (
                                            <Li
                                                key={
                                                    "job-qualification-" +
                                                    qualification +
                                                    "-" +
                                                    index
                                                }
                                            >
                                                {qualification}
                                            </Li>
                                        )
                                    ),
                                    Advantages: advantages.map(
                                        (advantage, index) => (
                                            <Li
                                                key={
                                                    "job-advantage-" +
                                                    advantage +
                                                    "-" +
                                                    index
                                                }
                                            >
                                                {advantage}
                                            </Li>
                                        )
                                    ),
                                }[activeTab]
                            }
                        </div>

                        <div className="mt-9 font-bold text-xl">
                            {t("Experience")}
                        </div>

                        <div className="mt-4 space-y-3">
                            {(Array.isArray(experience)
                                ? experience
                                : [experience]
                            ).map((experience, index) => (
                                <Li
                                    key={
                                        "job-experience-" +
                                        experience +
                                        "-" +
                                        index
                                    }
                                    green
                                >
                                    {experience}
                                </Li>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </Transition>
    );
}

const Li = ({
    children,
    green,
}: {
    children?: React.ReactNode;
    green?: boolean;
}) => {
    return (
        <div className="flex gap-2.5 text-sm md:w-1/2">
            <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className={cn(
                    "flex-none",
                    green ? "text-like" : "text-zinc-800"
                )}
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="11"
                    cy="11"
                    r="11"
                    fill="currentColor"
                    fillOpacity="0.2"
                />
                <path
                    d="M14.5 8.59375L9.6875 13.4062L7.5 11.2188"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <div>{children}</div>
        </div>
    );
};
