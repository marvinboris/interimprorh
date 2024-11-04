import { Button } from "@/components";
import { cn } from "@/utils";
import { i18nKey, Service } from "@types";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
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
        description: React.ReactNode = props.description;
    if (props.name.includes("personnel")) {
        name = "Provision of Staff";
        description = (
            <>
                <p>{t("Services/Staff/0")}</p>

                <ul className="list-disc list-inside">
                    <li>{t("Services/Staff/1")}</li>
                    <li>{t("Services/Staff/2")}</li>
                    <li>{t("Services/Staff/3")}</li>
                    <li>{t("Services/Staff/4")}</li>
                    <li>{t("Services/Staff/5")}</li>
                </ul>
            </>
        );
    } else if (props.name.includes("travailleurs")) {
        name = "Temporary employment and placement of workers";
        description = (
            <Trans i18nKey="Services/Placement">
                Contact us and entrust us with your activity: <br />
                <br />
                <strong>INTERIM PRO RH</strong> mobilizes the workforce to
                ensure your production without you being engaged with the
                employees through an employment contract. Furthermore, our
                expertise and experience in subcontracting allow you to refocus
                on your core business and strategic activities. We handle the
                legal, material, and logistical charges related to your
                activities. Reduce your costs and improve the quality of your
                services by entrusting us with your activity. Manage your
                activities with more flexibility and fluidity.
            </Trans>
        );
    } else if (props.name.includes("RH")) {
        name = "HR Advice";
        description = t("Services/HR/Skills/1/Description/0");
    } else if (props.name.includes("formation")) {
        name = "Training engineering";
        description = (
            <Trans i18nKey="Services/HR/Training">
                La formation professionnelle est un levier indispensable dans le
                maintien des compétences. Elle consiste à acquérir et améliorer
                le savoir-faire et le savoir-être.
                <br />
                <br />
                Pour une entreprise, elle vise à faire évoluer les compétences
                et les performances des employés, par conséquent, sa croissance
                économique.
                <br />
                <br />
                <strong>INTERIM PRO RH</strong> met en œuvre des modules de
                formation et les propose aux apprenants. Nous identifions les
                besoins en formation des apprenants, et formulons des objectifs
                en fonction de ces besoins, en tenant compte des contraintes
                liées à l’activité professionnelle, du contexte et du mécanisme
                autour de ladite activité.
            </Trans>
        );
    } else if (props.name.includes("services")) {
        name = "Service Provision";
        description = (
            <Trans i18nKey="Services/Provision/1/Description">
                Nous vous fournissons des solutions vous permettant de réaliser
                un benchmark salarial et une analyse objective de la
                rémunération sur le marché et avec vos concurrents directs.
                <br />
                <br />
                Nous vous accompagnons dans la construction de votre propre
                grille de salaire et la clarification des avantages sociaux
                pratiqués dans votre secteur d’activité.
                <br />
                <br />
                <strong>INTERIM PRO RH</strong> vous permet d’identifier les
                zones de risques et les facteurs de succès, d’optimiser votre
                politique de rémunérations, d’améliorer votre attractivité et de
                retenir vos talents.
            </Trans>
        );
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

            <div className="text-body line-clamp-3 text-sm">{description}</div>

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
