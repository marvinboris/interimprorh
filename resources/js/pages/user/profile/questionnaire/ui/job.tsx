import { CustomSelect, Input } from "@/components";
import { ApplicantJob } from "@types";
import { Trash } from "iconsax-react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Job({
    item,
    index: i,
    setJobs,
}: {
    item: ApplicantJob;
    index: number;
    setJobs: React.Dispatch<React.SetStateAction<ApplicantJob[]>>;
}) {
    const { t } = useTranslation();

    return (
        <div className="grid md:grid-cols-2 gap-3 p-3 border rounded">
            <div className="flex md:col-span-2 items-center justify-between">
                <div>#{i + 1}</div>

                <div>
                    <Trash
                        className="cursor-pointer"
                        onClick={() =>
                            setJobs((p) => p.filter((_, j) => j !== i))
                        }
                    />
                </div>
            </div>

            <Input
                value={item.position}
                label={t("Job position")}
                name={"jobs[" + i + "][position]"}
                placeholder={t("Enter job position")}
                onChange={(e) =>
                    setJobs((p) =>
                        p.map((j, k) =>
                            k === i ? { ...j, position: e.target.value } : j
                        )
                    )
                }
            />

            <Input
                value={item.company}
                label={t("Job company")}
                name={"jobs[" + i + "][company]"}
                placeholder={t("Enter job company")}
                onChange={(e) =>
                    setJobs((p) =>
                        p.map((j, k) =>
                            k === i ? { ...j, company: e.target.value } : j
                        )
                    )
                }
            />

            <Input
                value={item.field}
                label={t("Job field")}
                name={"jobs[" + i + "][field]"}
                placeholder={t("Enter job field")}
                onChange={(e) =>
                    setJobs((p) =>
                        p.map((j, k) =>
                            k === i ? { ...j, field: e.target.value } : j
                        )
                    )
                }
            />

            <CustomSelect
                value={item.period_start}
                label={t("Period start")}
                name={"jobs[" + i + "][period_start]"}
                onChange={(period_start: string) =>
                    setJobs((p) =>
                        p.map((j, k) => (k === i ? { ...j, period_start } : j))
                    )
                }
            />

            <CustomSelect
                value={item.period_end}
                label={t("Period end")}
                name={"jobs[" + i + "][period_end]"}
                onChange={(period_end: string) =>
                    setJobs((p) =>
                        p.map((j, k) => (k === i ? { ...j, period_end } : j))
                    )
                }
            />
        </div>
    );
}
