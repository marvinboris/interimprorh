import { useTranslation } from "react-i18next";
import Item from "./item";
import { Menu } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { cn, isApplicant, isCompany } from "@/utils";
import { Transition } from "@/components";
import { useAppSelector } from "@/hooks";
import { selectAuth } from "@/features";

export default function Nav() {
    const { data } = useAppSelector(selectAuth);
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <nav className="flex flex-col lg:flex-row lg:items-center gap-3.5 font-display">
            <Item exact href="/">
                {t("Home")}
            </Item>
            <Item href="/about">{t("Who are we")}</Item>
            <Item href="/services">{t("Our services")}</Item>
            {!isCompany(data) && <Item href="/search">{t("Careers")}</Item>}
            {!isApplicant(data) && (
                <Item href="/employer">{t("Employer area")}</Item>
            )}
            <Item href="/trainings">{t("Trainings")}</Item>
            <Item href="/contact">{t("Contact")}</Item>
        </nav>
    );
}
