import { Button, Logo } from "@/components";
import { fetch } from "@/services";
import { Subscriber } from "@types";
import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import Whatsapp from "./icons/whatsapp";
import FooterTitle from "./title";
import { Call, Location, Message } from "iconsax-react";
import { Link } from "react-router-dom";
import { Send } from "react-iconly";
import React, { FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Footer() {
    const [loading, setLoading] = React.useState(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get("email") as string;
        if (!email) return;

        const handle = async () => {
            setLoading(true);

            const subscriber = await fetch<Subscriber>({
                resource: "subscribers",
                method: "POST",
                data: { id: uuidv4(), email },
            });

            if (subscriber) {
                const email = e.currentTarget.querySelector(
                    "[name=email]"
                ) as HTMLInputElement;
                email.value = "";
            }

            setLoading(false);
        };

        handle();
    };

    return (
        <footer className="bg-zinc-800 text-white divide-y divide-neutral-200">
            <div className="container-auto flex flex-col lg:flex-row gap-10 pt-9 pb-14">
                <div className="flex-1">
                    <Logo white />

                    <div className="flex mt-14 gap-1.5">
                        <Location className="size-6" />
                        <div>
                            <div className="font-bold">Douala - Cameroun</div>

                            <div className="mt-2">
                                Situé au carrefour Douala Bercy
                                <br />
                                BP : 15170 Akwa Douala
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <FooterTitle>Important links</FooterTitle>
                    <div className="mt-7 *:flex *:items-center *:gap-2 *:before:h-px *:before:w-2 *:before:bg-white *:before:rounded-full">
                        <Link to="/">Home</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/jobs">Jobs</Link>
                        <Link to="/terms-conditions">Terms & Conditions</Link>
                        <Link to="/privacy-policy">Privacy policy</Link>
                    </div>
                </div>
                <div className="flex-1">
                    <div>
                        <FooterTitle>Contact us</FooterTitle>
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
                        <FooterTitle>Subscribe to newsletter</FooterTitle>
                        <form
                            onSubmit={onSubmit}
                            className="flex items-center p-2.5 gap-3.5 rounded-xl bg-white/20 mt-4"
                        >
                            <Message className="size-5 ml-1" />

                            <input
                                name="email"
                                type="email"
                                placeholder="Your e-mail"
                                className="p-0 bg-transparent border-0 outline-none flex-1"
                            />

                            <Button size="sm" type="submit" disabled={loading}>
                                {loading ? (
                                    <div className="size-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                ) : (
                                    <>
                                        <span className="hidden lg:inline-block">Subscribe</span>
                                        <Send size={24} />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="flex-1">
                    <FooterTitle>Find us on Gmaps</FooterTitle>

                    <div className="mt-7">
                        <iframe
                            title="Localisation"
                            className="h-40 w-full bg-white rounded-2xl"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        />
                    </div>
                </div>
            </div>

            <div>
                <div className="container-auto flex flex-col lg:flex-row items-center gap-4 py-4">
                    <div className="*:font-medium text-center lg:text-left">
                        <span>Copyright 2024 |</span> . All Rights Reserved{" "}
                        <span>|</span> Made with love by{" "}
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
