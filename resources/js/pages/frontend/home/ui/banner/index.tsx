import { Add, ArrowDown2, Briefcase, SearchNormal1 } from "iconsax-react";
import Right from "./right";
import { Button } from "@/components";
import Avatar from "./avatar";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import React from "react";

export default function Banner() {
    const { t } = useTranslation();

    return (
        <div className="pt-8 lg:pt-32 pb-24 lg:pb-32 container-auto flex flex-col lg:flex-row relative overflow-clip lg:overflow-visible">
            <div className="order-2 lg:order-1">
                <h1 className="font-bold text-3xl/tight lg:text-6xl/tight text-center lg:text-left *:text-primary">
                    <Trans i18nKey="Unlock your next <1>career opportunity</1> today">
                        Unlock your next <span>career opportunity</span> today
                    </Trans>
                </h1>

                <p className="lg:w-3/5 mt-5 text-lg lg:text-xl text-center lg:text-left">
                    {t(
                        "Find your dream job today. At Interim Pro RH discover opportunities that match your skills and ambitions."
                    )}
                </p>

                <div className="flex flex-col justify-center lg:justify-start sm:flex-row gap-3 lg:gap-6 mt-10 *:*:w-full">
                    <Link to="/search">
                        <Button size="xl" div>
                            <SearchNormal1 className="size-6" />
                            <span>{t("Am looking for job")}</span>
                        </Button>
                    </Link>

                    <Link to="/employer">
                        <Button color="white" size="xl" div>
                            <Briefcase className="size-6" />
                            <span>{t("Am an employer")}</span>
                        </Button>
                    </Link>
                </div>

                <div className="mt-10 lg:mt-14 flex items-center justify-center lg:justify-start gap-4 lg:gap-0">
                    <div className="flex ml-7 *:-ml-7">
                        <Avatar
                            alt="Avatar 1"
                            src="/images/0bd02487ba65a96292a4154b1a405fcb.webp"
                        />
                        <Avatar
                            alt="Avatar 2"
                            src="/images/5d55f6566fe416e0417b34d33bb58ff0.webp"
                        />
                        <Avatar
                            alt="Avatar 3"
                            src="/images/90f283e3cdc8601ec6b423aa57f39e92.webp"
                        />
                        <Avatar
                            alt="Avatar 4"
                            src="/images/b4630016668852ac424ad68e48beadca.webp"
                        />
                        <button
                            role="button"
                            aria-label="More users"
                            className="size-14 flex-none rounded-full flex items-center justify-center bg-primary text-white"
                        >
                            <Add className="size-7" />
                        </button>
                    </div>

                    <p className="text-body flex-1 sm:flex-none lg:flex-1 lg:pl-3">
                        <Trans i18nKey="More than <2>12000</2> users<br />trust our website">
                            More than <span className="font-bold">12000</span>{" "}
                            users
                            <br />
                            trust our website
                        </Trans>
                    </p>
                </div>
            </div>

            <Right />

            {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <a
                    href="#about"
                    aria-label="Scroll to next section"
                    className="bg-primary text-white w-8 h-14 rounded-full flex items-center flex-col justify-end p-2 border border-white/40"
                >
                    <ArrowDown2 className="size-3.5" />
                </a>
            </div> */}
        </div>
    );
}
