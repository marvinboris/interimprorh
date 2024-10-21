import { Input } from "@/components";
import { ApplicantSkill } from "@types";
import { Trash } from "iconsax-react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Skill({
    item,
    index: i,
    setSkills,
}: {
    item: ApplicantSkill;
    index: number;
    setSkills: React.Dispatch<React.SetStateAction<ApplicantSkill[]>>;
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
                            setSkills((p) => p.filter((_, j) => j !== i))
                        }
                    />
                </div>
            </div>

            <Input
                value={item.name}
                label={t("Skill name")}
                name={"skills[" + i + "][name]"}
                placeholder={t("Enter your IT skill")}
                onChange={(e) =>
                    setSkills((p) =>
                        p.map((c, j) =>
                            j === i ? { ...c, name: e.target.value } : c
                        )
                    )
                }
            />
        </div>
    );
}
