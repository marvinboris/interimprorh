import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import Whatsapp from "./icons/whatsapp";
import { Button, Logo } from "@/components";
import UserFooter from "@/layouts/user/footer";
import { fetch } from "@/services";
import { Subscriber } from "@types";
import FooterTitle from "./title";
import { Call, Location, Message } from "iconsax-react";
import { Link, useLocation } from "react-router-dom";
import { Send } from "react-iconly";
import React, { FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { isApplicant } from "@/utils";
import { useAppSelector } from "@/hooks";
import { selectAuth } from "@/features";

export default function Footer() {
    const emailRef = React.useRef<HTMLInputElement>(null);

    const { data } = useAppSelector(selectAuth);

    const [loading, setLoading] = React.useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get("email") as string;
        if (!email) return;

        const handle = async () => {
            setLoading(true);

            try {
                const subscriber = await fetch<Subscriber>({
                    resource: "subscribers",
                    method: "POST",
                    data: { id: uuidv4(), email },
                });

                if (subscriber && emailRef.current) emailRef.current.value = "";
            } catch (error) {
            } finally {
                setLoading(false);
            }
        };

        handle();
    };

    if (location.pathname.startsWith("/user")) return <UserFooter />;
    return (
        <footer className="bg-zinc-800 text-white divide-y divide-neutral-200">
            <div className="container-auto flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-10 pt-9 pb-14">
                <div className="flex-1">
                    <Logo white />

                    <div className="flex mt-14 gap-1.5">
                        <Location className="size-6" />
                        <div>
                            <div className="font-bold">Douala - Cameroun</div>

                            <div className="mt-2">
                                {t("Located at carrefour Douala Bercy")}
                                <br />
                                {t("PO Box. 15170 Akwa Douala")}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <FooterTitle>{t("Important links")}</FooterTitle>
                    <div className="mt-7 *:flex *:items-center *:gap-2 *:before:h-px *:before:w-2 *:before:bg-white *:before:rounded-full">
                        <Link to="/">{t("Home")}</Link>
                        <Link to="/about">{t("Who are we")}</Link>
                        <Link to="/services">{t("Services")}</Link>
                        {(!data || isApplicant(data)) && (
                            <Link to="/careers">{t("Careers")}</Link>
                        )}
                        {!data && (
                            <Link to="/employer">{t("Employer area")}</Link>
                        )}
                        <Link to="/welcome">{t("WelcomeWord/Header")}</Link>
                        <Link to="/conatact">{t("Contact")}</Link>
                    </div>
                </div>
                <div className="flex-1">
                    <div>
                        <FooterTitle>{t("Contact us")}</FooterTitle>
                        <div className="mt-7">
                            <div className="flex items-center gap-2.5">
                                <Message className="size-5" />
                                <a href="mailto:contact@interimprorh.com">
                                    contact@interimprorh.com
                                </a>
                            </div>
                            <div className="flex gap-2.5 mt-3.5">
                                <Call className="size-5" />
                                <div>
                                    <a href="tel:+237657878787">
                                        +237 657 87 87 87
                                    </a>
                                    <br />
                                    <a href="tel:+237681618161">
                                        +237 681 61 81 61
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <FooterTitle>
                            {t("Subscribe to newsletter")}
                        </FooterTitle>
                        <form
                            onSubmit={onSubmit}
                            className="flex items-center p-2.5 gap-3.5 rounded-xl bg-white/20 mt-4 max-w-80"
                        >
                            <Message className="size-5 ml-1" />

                            <input
                                name="email"
                                type="email"
                                ref={emailRef}
                                placeholder={t("Your e-mail")}
                                className="p-0 bg-transparent border-0 outline-none flex-1 min-w-0"
                            />

                            <Button size="sm" type="submit" disabled={loading}>
                                {loading ? (
                                    <div className="size-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                ) : (
                                    <>
                                        <span className="hidden lg:inline-block">
                                            {t("Subscribe")}
                                        </span>
                                        <Send size={24} />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="flex-1">
                    <FooterTitle>{t("Find us on Gmaps")}</FooterTitle>

                    <div className="mt-7">
                        <iframe
                            title="Localisation"
                            className="h-40 w-full bg-white rounded-2xl"
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3979.8486601173117!2d9.694374999999997!3d4.0512749999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMDMnMDQuNiJOIDnCsDQxJzM5LjgiRQ!5e0!3m2!1sfr!2sde!4v1731338459045!5m2!1sfr!2sde"
                        />
                    </div>
                </div>
            </div>

            <div>
                <div className="container-auto flex flex-col lg:flex-row items-center gap-4 py-4">
                    <div className="*:font-medium text-center lg:text-left">
                        <span>Copyright 2024 |</span> .{" "}
                        {t("All Rights Reserved")} <span>|</span> {t("Made by")}{" "}
                        <span>Briluce Services</span>
                    </div>

                    <div className="lg:ml-auto flex gap-3.5 *:rounded-full *:size-11 *:bg-primary *:flex *:items-center *:justify-center *:*:size-6">
                        <div>
                            <Facebook />
                        </div>
                        <div>
                            <Instagram />
                        </div>
                        <div>
                            <Whatsapp />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
