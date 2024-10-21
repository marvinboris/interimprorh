import { CustomSelect, Input } from "@/components";
import { ApplicantTraining } from "@types";
import { Trash } from "iconsax-react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Training({
    item,
    index: i,
    setTrainings,
}: {
    item: ApplicantTraining;
    index: number;
    setTrainings: React.Dispatch<React.SetStateAction<ApplicantTraining[]>>;
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
                            setTrainings((p) => p.filter((_, j) => j !== i))
                        }
                    />
                </div>
            </div>

            <Input
                value={item.diploma}
                label={t("Training diploma")}
                name={"trainings[" + i + "][diploma]"}
                onChange={(e) =>
                    setTrainings((p) =>
                        p.map((t, j) =>
                            j === i ? { ...t, diploma: e.target.value } : t
                        )
                    )
                }
                placeholder={t("Enter your training diploma")}
            />

            <Input
                value={item.school}
                label={t("Training school")}
                name={"trainings[" + i + "][school]"}
                onChange={(e) =>
                    setTrainings((p) =>
                        p.map((t, j) =>
                            j === i ? { ...t, school: e.target.value } : t
                        )
                    )
                }
                placeholder={t("Enter your training school")}
            />

            <CustomSelect
                value={item.year}
                label={t("Training year")}
                name={"trainings[" + i + "][year]"}
                onChange={(year: string) =>
                    setTrainings((p) =>
                        p.map((t, j) => (j === i ? { ...t, year } : t))
                    )
                }
            />

            <Input
                value={item.specialty}
                label={t("Training specialty")}
                name={"trainings[" + i + "][specialty]"}
                onChange={(e) =>
                    setTrainings((p) =>
                        p.map((t, j) =>
                            j === i ? { ...t, specialty: e.target.value } : t
                        )
                    )
                }
                placeholder={t("Enter your training specialty")}
            />
        </div>
    );
}
