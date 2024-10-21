import { CustomSelect, Input } from "@/components";
import { ApplicantCertificate } from "@types";
import { Trash } from "iconsax-react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Certificate({
    item,
    index: i,
    setCertificates,
}: {
    item: ApplicantCertificate;
    index: number;
    setCertificates: React.Dispatch<React.SetStateAction<ApplicantCertificate[]>>;
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
                            setCertificates((p) => p.filter((_, j) => j !== i))
                        }
                    />
                </div>
            </div>

            <Input
                value={item.name}
                label={t("Certificate name")}
                name={"certificates[" + i + "][name]"}
                placeholder={t("Enter your certificate name")}
                onChange={(e) =>
                    setCertificates((p) =>
                        p.map((c, j) =>
                            j === i ? { ...c, name: e.target.value } : c
                        )
                    )
                }
            />

            <Input
                value={item.organization}
                label={t("Certificate organization")}
                name={"certificates[" + i + "][organization]"}
                placeholder={t("Enter your certificate organization")}
                onChange={(e) =>
                    setCertificates((p) =>
                        p.map((c, j) =>
                            j === i ? { ...c, organization: e.target.value } : c
                        )
                    )
                }
            />

            <CustomSelect
                value={item.year}
                label={t("Certificate year")}
                name={"certificates[" + i + "][year]"}
                onChange={(year: string) =>
                    setCertificates((p) =>
                        p.map((c, j) => (j === i ? { ...c, year } : c))
                    )
                }
            />
        </div>
    );
}
