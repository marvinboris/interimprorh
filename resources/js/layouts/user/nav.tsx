import { Section } from "@/components";
import { logout } from "@/features";
import { useAppDispatch } from "@/hooks";
import { cn } from "@/utils";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

export default function UserNav() {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    return (
        <header className="bg-white pt-4 md:pt-8 xl:pt-12 border-b border-neutral-200">
            <Section className="flex items-end gap-4 md:gap-8 xl:gap-16">
                <NavItem link="/user">{t("Dashboard")}</NavItem>
                <NavItem link="/user/requests">{t("My requests")}</NavItem>
                <NavItem link="/user/profile">{t("My profile")}</NavItem>

                <div
                    className="border-transparent cursor-pointer ml-auto border-b-4 pb-5"
                    onClick={() => dispatch(logout())}
                >
                    {t("Logout")}
                </div>
            </Section>
        </header>
    );
}

function NavItem({
    link,
    children,
}: {
    link: string;
    children?: React.ReactNode;
}) {
    const location = useLocation();
    const active = location.pathname === link;

    return (
        <NavLink
            className={cn(
                active ? "font-bold border-primary" : "border-transparent",
                "border-b-4 pb-5"
            )}
            to={link}
        >
            {children}
        </NavLink>
    );
}
