import { CustomSelect, Input } from "@/components";
import { ApplicantLanguage } from "@types";
import { Trash } from "iconsax-react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Language({
    item,
    index: i,
    setLanguages,
}: {
    item: ApplicantLanguage;
    index: number;
    setLanguages: React.Dispatch<React.SetStateAction<ApplicantLanguage[]>>;
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
                            setLanguages((p) => p.filter((_, j) => j !== i))
                        }
                    />
                </div>
            </div>

            <Input
                value={item.name}
                label={t("Language name")}
                name={"languages[" + i + "][name]"}
                placeholder={t("Enter language name")}
                onChange={(e) =>
                    setLanguages((p) =>
                        p.map((c, j) =>
                            j === i ? { ...c, name: e.target.value } : c
                        )
                    )
                }
            />

            <CustomSelect
                value={item.name}
                label={t("Language level")}
                name={"languages[" + i + "][level]"}
                onChange={(level: string) =>
                    setLanguages((p) =>
                        p.map((c, j) => (j === i ? { ...c, level } : c))
                    )
                }
            />
        </div>
    );
}
