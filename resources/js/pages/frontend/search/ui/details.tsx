import {
    Calendar,
    CloseCircle,
    Document,
    Location,
    Moneys,
    TickCircle,
} from "iconsax-react";
import { usePageSearchContext } from "../context";
import { Alert, Button } from "@/components";
import { Send } from "react-iconly";
import React from "react";
import { cn, isApplicant } from "@/utils";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useAppSelector, useFetch } from "@/hooks";
import { selectAuth } from "@/features";
import { i18nKey, Message } from "@types";

export default function Details() {
    const { t } = useTranslation();
    const { token, data } = useAppSelector(selectAuth);

    const { selected, setSelected } = usePageSearchContext();

    const allTabs = [
        "Responsibilities",
        "Qualifications",
        "Advantages",
    ] as const;
    const [activeTab, setActiveTab] = React.useState<(typeof allTabs)[number]>(
        allTabs[0]
    );
    const [applied, setApplied] = React.useState<boolean>();
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState<Message>();

    React.useEffect(() => {
        if (!token || !selected?.id) return;

        const handler = async () => {
            setApplied(undefined);
            setMessage(undefined);
            try {
                const res = await fetch(
                    "/api/user/requests/" + selected.id,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Authorization: token,
                        },
                    }
                );
                setApplied(res.ok);
            } catch (error) {
                console.log(error);
            }
        };

        handler();
    }, [selected?.id]);

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

    const handleApply = async () => {
        if (!token) return;
        setLoading(true);
        setMessage(undefined);
        try {
            const res = await fetch("/api/user/apply/" + selected.id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: token,
                },
            });
            if (res.ok) {
                setMessage({
                    content: t("Successfully applied"),
                    type: "success",
                });
                setApplied(true);
            } else {
                setMessage({
                    content: t("Error while applying"),
                    type: "danger",
                });
            }
        } catch (error) {
            setMessage({
                content: t("Error while applying"),
                type: "danger",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="lg:border border-neutral-200 bg-white lg:rounded-3xl *:p-6 divide-y divide-neutral-200 fixed lg:max-h-[calc(100vh-130px)] lg:sticky inset-0 overflow-auto top-[90px] lg:top-28">
            <header>
                <div className="flex items-start gap-4">
                    <div className="size-16 rounded-lg bg-stone-100"></div>

                    <div className="flex-1 self-center">
                        <div className="font-bold text-3xl">{company}</div>
                    </div>

                    <div className="lg:hidden">
                        <CloseCircle
                            variant="Bulk"
                            onClick={() => setSelected(undefined)}
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
                        <span>{contract}</span>
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

                {isApplicant(data) && applied !== undefined ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button
                            disabled={applied || loading}
                            loading={loading}
                            onClick={handleApply}
                        >
                            {applied ? (
                                <span>{t("Applied")}</span>
                            ) : (
                                <>
                                    <span>{t("Apply")}</span>
                                    <Send size={20} />
                                </>
                            )}
                        </Button>

                        <Alert color={message?.type}>{message?.content && t(message.content as i18nKey)}</Alert>
                    </div>
                ) : null}
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
                            Advantages: advantages.map((advantage, index) => (
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
                            )),
                        }[activeTab]
                    }
                </div>

                <div className="mt-9 font-bold text-xl">{t("Experience")}</div>

                <div className="mt-4 space-y-3">
                    {(Array.isArray(experience)
                        ? experience
                        : [experience]
                    ).map((experience, index) => (
                        <Li
                            key={"job-experience-" + experience + "-" + index}
                            green
                        >
                            {experience}
                        </Li>
                    ))}
                </div>
            </main>
        </div>
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
