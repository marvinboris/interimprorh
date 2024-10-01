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
import { Company, Contract, Job, Message, Request } from "@types";
import { Transition } from "@/components";

export default function Details({
    request,
    show,
    setShow,
}: {
    request: Request | undefined;
    show: boolean;
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

    if (!request) return null;

    const { _job: selected, _applicant: user } = request;

    if (!selected || !user) return null;
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
        <Transition show={show && Boolean(selected)}>
            <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50">
                <div
                    className="inset-0 absolute -z-10"
                    onClick={() => setShow(false)}
                />

                <div className="lg:border border-neutral-200 bg-white lg:rounded-3xl fixed lg:static inset-0 overflow-auto top-[90px] w-full max-w-5xl">
                    <div className="grid grid-cols-2 divide-x *:divide-y *:divide-neutral-200 *:*:p-6">
                        <div>
                            <header>
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
                                        <span>
                                            {moment(created_at).fromNow()}
                                        </span>
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

                                <div className="mt-3.5 text-sm">
                                    {description}
                                </div>

                                <div className="pt-8 flex overflow-x-auto gap-3.5 *:h-11 text-sm font-bold *:flex *:items-center *:rounded-md *:gap-2.5 *:px-2.5">
                                    {allTabs.map((tab) => (
                                        <div
                                            key={
                                                "tab-" + selected.id + "-" + tab
                                            }
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
                                            Responsibilities:
                                                responsibilities.map(
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

                        <div>
                            <header>
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <div className="font-bold text-xl lg:text-2xl">
                                            {user.first_name} {user.last_name}
                                        </div>

                                        <div className="text-neutral-400 text-sm">
                                            {user.job}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2 lg:mt-3.5 flex flex-wrap gap-2 *:flex *:items-center *:p-2.5 *:gap-2.5 *:bg-stone-100 *:rounded-md *:border *:border-neutral-200 text-xs/none lg:text-sm/none">
                                    <div>
                                        {t("Since")} {user.experience}{" "}
                                        {t("years")}
                                    </div>
                                    <div>
                                        <Location className="size-3.5" />
                                        <span>
                                            {user.city} - {user.country}
                                        </span>
                                    </div>
                                    <div
                                        className={cn(
                                            "!border-0 font-semibold !gap-1",
                                            { 0: "!bg-like/10 text-like" }[
                                                user.availability
                                            ]
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "size-1.5 rounded-full",
                                                { 0: "bg-like" }[
                                                    user.availability
                                                ]
                                            )}
                                        />
                                        <span>
                                            {
                                                { 0: t("Available") }[
                                                    user.availability
                                                ]
                                            }
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-bold">+4</span>
                                    </div>
                                </div>
                            </header>

                            <div className="mt-5 lg:mt-10 pb-4 lg:pb-7">
                                {user.biography}
                            </div>
                        </div>
                    </div>
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
