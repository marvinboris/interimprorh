import { Button } from "@/components";
import { cn } from "@/utils";
import { i18nKey, Service } from "@types";
import { useTranslation } from "react-i18next";
import { Iconly, Send } from "react-iconly";
import { Link } from "react-router-dom";

export default function Block({
    icon: Icon,
    index,
    link,
    ...props
}: Service & { icon: typeof Iconly; index: number }) {
    const { t } = useTranslation();

    let name: i18nKey = props.name as i18nKey,
        description: i18nKey = props.description as i18nKey;
    if (props.name.includes("personnel")) {
        name = "Provision of Staff";
        description = "Services/Staff/Description";
    } else if (props.name.includes("travailleurs")) {
        name = "Temporary employment and placement of workers";
        description = "Services/Placement/Description";
    } else if (props.name.includes("RH")) {
        name = "HR Advice";
        description = "Services/HR/Description";
    } else if (props.name.includes("formation")) {
        name = "Training engineering";
        description = "Services/Engineering/Description";
    } else if (props.name.includes("services")) {
        name = "Service Provision";
        description = "Services/Provision/Description";
    }

    return (
        <div className="border border-neutral-200 rounded-xl bg-white p-6 pr-16 overflow-clip relative transition-all duration-100 hover:shadow-lg">
            <div
                className={cn(
                    "opacity-20 absolute -bottom-0 right-0 -rotate-[20deg] origin-top-right",
                    [
                        "text-primary",
                        "text-secondary",
                        "text-danger",
                        "text-body",
                        "text-like",
                    ][index % 5]
                )}
            >
                <Icon size={98} />
            </div>

            <div className="font-bold">{t(name)}</div>

            <div className="my-4 h-px bg-neutral-200" />

            <p className="text-body line-clamp-3 text-sm">{t(description)}</p>

            <div className="mt-4">
                <Link to={link}>
                    <Button color="white">
                        <span>{t("View more")}</span>
                        <Send size={20} />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
