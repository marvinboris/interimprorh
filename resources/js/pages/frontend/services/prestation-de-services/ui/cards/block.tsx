import { Button } from "@/components";
import { SkillHR } from "@types";
import { ArrowRight } from "iconsax-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Block({ description, name }: SkillHR) {
    const { t } = useTranslation();
    return (
        <div className="bg-white rounded-[20px] border-4 border-transparent hover:border-primary/5 p-5 text-sm pb-9 flex flex-col">
            <div className="h-11 flex items-end font-bold">{name}</div>

            <div className="my-4 h-px rounded-full bg-neutral-200" />

            {typeof description === "string" ? (
                <p>{description}</p>
            ) : (
                description
            )}

            <div className="pt-8 mt-auto">
                <Link to={"/contact?object=" + t("Service Provision")}>
                    <Button>
                        <span>{t("Contact us")}</span>
                        <ArrowRight className="size-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
