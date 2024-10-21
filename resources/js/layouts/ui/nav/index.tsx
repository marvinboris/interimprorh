import { useTranslation } from "react-i18next";
import Item from "./item";
import { Menu } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/utils";
import { Transition } from "@/components";

export default function Nav() {
    const { t } = useTranslation();
    const location = useLocation();

    return (
        <nav className="flex flex-col lg:flex-row lg:items-center gap-3.5 font-display">
            <Item exact href="/">
                {t("Home")}
            </Item>
            <Menu as="div" className="relative">
                <Menu.Button>
                    <div
                        className={cn("text-sm uppercase relative group", {
                            "text-primary font-bold":
                                location.pathname.startsWith("/about"),
                        })}
                    >
                        {t("About us")}
                    </div>
                </Menu.Button>

                <Transition>
                    <Menu.Items className="absolute top-full left-0 bg-white rounded-lg p-3 shadow-sm border border-stone-200">
                        <div>
                            <Link
                                to="/about"
                                className={cn("text-sm uppercase", {
                                    "text-primary font-bold":
                                        location.pathname === "/about",
                                })}
                            >
                                {t("Who are we")}
                            </Link>
                        </div>

                        <div>
                            <Link
                                to="/about/services"
                                className={cn("text-sm uppercase", {
                                    "text-primary font-bold":
                                        location.pathname === "/about/services",
                                })}
                            >
                                {t("Our services")}
                            </Link>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            <Item href="/careers">{t("Careers")}</Item>
            <Item href="/employer">{t("Employer area")}</Item>
            <Item href="/welcome">{t("WelcomeWord/Header")}</Item>
            <Item href="/contact">{t("Contact")}</Item>
        </nav>
    );
}
