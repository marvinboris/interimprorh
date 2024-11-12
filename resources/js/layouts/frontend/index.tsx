import { LanguageSelector, Logo } from "@/components";
import MobileNav from "../ui/mobile-nav";
import Nav from "../ui/nav";
import Footer from "./footer";
import { ProfileCircle } from "iconsax-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "@/hooks";
import { selectAuth } from "@/features";
import { cn, isApplicant, isCompany } from "@/utils";
import ProfilePic from "./profile-pic";
import { useTranslation } from "react-i18next";

export function LayoutFrontend() {
    const { data } = useAppSelector(selectAuth);
    const { pathname } = useLocation();
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col">
            <header className="flex items-center h-[90px] sticky top-0 bg-white/90 backdrop-blur z-50">
                <div className="container-auto flex items-center">
                    <div className="mr-auto">
                        <Link to="/" aria-label="Logo Interim Pro RH">
                            <Logo />
                        </Link>
                    </div>

                    <div className="hidden lg:block">
                        <Nav />
                    </div>

                    <div className="ml-auto lg:ml-10">
                        <LanguageSelector />
                    </div>

                    {isApplicant(data) ? (
                        <Link
                            to="/user"
                            className="ml-auto flex items-center gap-3.5"
                        >
                            <ProfilePic />

                            <div className="font-semibold hidden md:block">
                                {[
                                    t("Hello"),
                                    [data.first_name, data.last_name]
                                        .filter(Boolean)
                                        .join(" ") || data.email,
                                ]
                                    .filter(Boolean)
                                    .join(", ")}{" "}
                                !
                            </div>
                        </Link>
                    ) : isCompany(data) ? (
                        <Link
                            to="/employer"
                            className="ml-auto flex items-center gap-3.5"
                        >
                            <ProfilePic />

                            <div className="font-semibold hidden md:block">
                                {[t("Hello"), data.name]
                                    .filter(Boolean)
                                    .join(", ")}{" "}
                                !
                            </div>
                        </Link>
                    ) : (
                        <Link
                            className="hidden lg:flex items-center text-primary gap-6 ml-auto"
                            to="/login"
                        >
                            <div className="font-semibold font-display underline uppercase text-sm">
                                {t("Sign in")}
                            </div>

                            <div className="size-14 flex items-center justify-center rounded-full bg-primary/10">
                                <ProfileCircle className="size-6" />
                            </div>
                        </Link>
                    )}

                    <MobileNav />
                </div>
            </header>

            <main
                className={cn("flex-1 flex flex-col", {
                    "overflow-hidden": pathname !== "/search",
                })}
            >
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
