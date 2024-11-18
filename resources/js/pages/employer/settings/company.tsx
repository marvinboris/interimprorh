import { Input, Switch } from "@/components";
import { Work } from "react-iconly";
import EditButton from "./ui/edit-button";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/hooks";
import { selectAuth } from "@/features";
import { isCompany } from "@/utils";
import React from "react";

export default function CompanySettings() {
    const { t } = useTranslation();
    const { data } = useAppSelector(selectAuth);

    if (!isCompany(data)) return null;

    const [maintenance, setMaintenance] = React.useState(Boolean(data.maintenance));

    return (
        <div className="bg-white rounded-3xl border border-neutral-200 px-10 pt-9 pb-20">
            <header className="border-b border-neutral-200 pb-4 flex items-center gap-6">
                <div className="text-neutral-200">
                    <Work size={48} />
                </div>

                <div className="text-2xl font-bold">
                    {t("Company settings")}
                </div>
            </header>

            <div className="mt-12 grid grid-cols-2 gap-5">
                <Input
                    name="name"
                    label={t("Company name")}
                    defaultValue={data.name}
                />
                <Input
                    name="email"
                    type="email"
                    label={t("E-mail address")}
                    defaultValue={data.email}
                />
                <Input
                    name="phone"
                    type="tel"
                    label={t("Phone No.")}
                    defaultValue={data.phone}
                />
                <Input
                    name="location"
                    label={t("Location")}
                    defaultValue={data.location}
                />
                <Input
                    addon={
                        <div className="mx-3 text-left">
                            <div className="flex gap-1.5 items-center">
                                <div className="font-medium text-base/none">
                                    {t("Coming soon")}
                                </div>
                                <div className="size-1 bg-dislike rounded-full mt-1" />
                                <div className="text-xs text-dislike font-medium mt-1">
                                    {t("OFFLINE")}
                                </div>
                            </div>

                            <div className="text-neutral-500 font-medium text-[10px]">
                                {t("Website offline")}
                            </div>
                        </div>
                    }
                    label={t("Maintenance mode")}
                    append={
                        <Switch
                            name="maintenance"
                            checked={maintenance}
                            onChange={setMaintenance}
                        />
                    }
                />
            </div>
        </div>
    );
}
