import Card from "./ui/card";
import { DocumentVerified, UserInformation } from "./ui/icons";
import ProfilePic from "./ui/profile-pic";
import { UserDashboardData } from "./utils";
import { Loading, Section, TextArea } from "@/components";
import { Status } from "@/enums";
import { selectAuth, userEdit } from "@/features";
import { useAppDispatch, useAppSelector, useGet } from "@/hooks";
import { cn, isApplicant } from "@/utils";
import { Edit2, Location } from "iconsax-react";
import React from "react";
import { useTranslation } from "react-i18next";

export function PageUserDashboard() {
    const { data: user, status } = useAppSelector(selectAuth);
    if (!isApplicant(user)) return null;

    const { data, isLoading } = useGet<UserDashboardData>("/user/dashboard");

    const dispatch = useAppDispatch();

    const [biography, setBiography] = React.useState(user.biography);
    const [editing, setEditing] = React.useState(false);

    const { t } = useTranslation();

    React.useEffect(() => {
        setBiography(user.biography);
        setEditing(false);
    }, [user.biography]);

    if (isLoading) return <Loading />;
    return (
        <Section className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-6 pt-4 lg:pt-8 pb-5 md:pb-9 xl:pb-14">
            <div>
                <div className="grid md:grid-cols-2 gap-2 md:gap-4 xl:gap-6">
                    <Card
                        title={t("My requests")}
                        icon={DocumentVerified}
                        value={data?.requests}
                    />
                    <Card
                        title={t("My interviews")}
                        color="like"
                        icon={DocumentVerified}
                        value={data?.interviews}
                    />
                    <Card
                        title={t("Profile status")}
                        color="dislike"
                        icon={UserInformation}
                        value={data?.status + "%"}
                    />
                </div>
            </div>

            <div className="border border-neutral-200 rounded-3xl bg-white p-3.5 lg:p-7 flex items-end gap-3 lg:gap-6">
                <div className="flex-1">
                    <header>
                        <div className="flex gap-4 items-center">
                            <ProfilePic />

                            <div>
                                <div className="font-bold text-xl lg:text-2xl">
                                    {t("Hello")} ! {user.first_name}
                                </div>
                                <div className="text-neutral-400 text-sm">
                                    {user.job}
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 lg:mt-3.5 flex flex-wrap gap-2 *:flex *:items-center *:p-2.5 *:gap-2.5 *:bg-stone-100 *:rounded-md *:border *:border-neutral-200 text-xs/none lg:text-sm/none">
                            <div>
                                {t("Since")} {user.experience} {t("years")}
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
                                        { 0: "bg-like" }[user.availability]
                                    )}
                                />
                                <span>
                                    {{ 0: t("Available") }[user.availability]}
                                </span>
                            </div>
                            <div>
                                <span className="font-bold">+4</span>
                            </div>
                        </div>
                    </header>

                    <div className="mt-5 lg:mt-10 pb-4 lg:pb-7">
                        <div className="flex items-center gap-3">
                            <div className="font-bold">{t("Biography")}</div>
                            <div className="flex-1 flex items-center">
                                <div className="size-1 bg-neutral-200 rotate-45" />

                                <div className="flex-1 h-px bg-neutral-200" />
                            </div>
                        </div>

                        {editing ? (
                            <TextArea
                                className="mt-4 lg:mt-8 text-sm"
                                value={biography}
                                onChange={(e) => setBiography(e.target.value)}
                            />
                        ) : (
                            <div className="mt-4 lg:mt-8 text-sm">
                                {biography}
                            </div>
                        )}
                    </div>
                </div>

                <div
                    className={cn(
                        "size-11 rounded-full cursor-pointer flex items-center justify-center",
                        editing
                            ? "bg-white text-primrary"
                            : "bg-primary text-white"
                    )}
                    onClick={
                        editing
                            ? () => dispatch(userEdit({ ...user, biography }))
                            : () => setEditing(true)
                    }
                >
                    {status === Status.LOADING ? (
                        <div className="size-5 border-2 border-t-transparent border-primary rounded-full animate-spin" />
                    ) : (
                        <Edit2 className="size-5" />
                    )}
                </div>
            </div>
        </Section>
    );
}
