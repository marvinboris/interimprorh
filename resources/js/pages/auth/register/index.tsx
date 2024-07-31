import { Polygon1, Polygon2 } from "../ui/polygons";
import Polygon from "./polygon";
import {
    Alert,
    Button,
    Input,
    Loading,
    Section,
    SectionTitle,
    Transition,
} from "@/components";
import { Message } from "@types";
import React, { FormEvent } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function PageAuthRegister() {
    const formRef = React.useRef<HTMLFormElement>(null);
    const { t } = useTranslation();

    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState<Message>();

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = formRef.current;
        if (!form) return;

        const formData = new FormData(form);

        const email = formData.get("email") as string | null;
        const password = formData.get("password") as string | null;
        const password_confirmation = formData.get("password_confirmation") as
            | string
            | null;

        if (password !== password_confirmation)
            return setMessage({
                content: "Incorrect password confirmation",
                type: "danger",
            });

        setMessage(undefined);
        setLoading(true);
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    password_confirmation,
                }),
            });
            const data = (await res.json()) as
                | { email: string }
                | { errors: Record<string, string[]> };
            setMessage(
                "email" in data
                    ? {
                          content: `Account successfully created. E-mail sent to : ${data.email}`,
                          type: "success",
                      }
                    : {
                          content: Object.values(data.errors)
                              .map((t) => t.join("\n"))
                              .join("\n"),
                          type: "danger",
                      }
            );
            form.reset();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <div className="bg-stone-100 py-16 lg:py-32 relative overflow-clip lg:overflow-visible flex-1 flex items-center">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-3/5">
                <Polygon1 />
            </div>

            <Section className="flex items-center flex-col lg:flex-row gap-12">
                <SectionTitle className="flex-1">
                    <Trans i18nKey="Welcome !<br /><3>Create your account,</3><br />in few steps">
                        Welcome !<br />
                        <span>Create your account,</span>
                        <br />
                        in few steps
                    </Trans>
                </SectionTitle>

                <div className="w-full sm:w-[415px] flex-none relative">
                    <div className="absolute bottom-0 right-0 translate-x-14">
                        <Polygon2 />
                    </div>

                    <div className="relative z-0 bg-white shadow-xl rounded-[38px] px-6 lg:px-11 pt-14 pb-9">
                        <div className="size-9 bg-primary rounded-full absolute top-5 right-5" />

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Polygon />
                        </div>

                        <div className="font-bold text-2xl">
                            {t("Create account")}
                        </div>
                        <form
                            ref={formRef}
                            onSubmit={onSubmit}
                            className="mt-6 relative"
                        >
                            <Transition show={loading}>
                                <div className="absolute z-10 inset-0 bg-white/50 backdrop-blur-sm">
                                    <Loading />
                                </div>
                            </Transition>

                            <Alert
                                color={message?.type}
                                closable={false}
                                className="lg:col-span-2 mb-3"
                            >
                                {message?.content}
                            </Alert>

                            <Input
                                required
                                name="email"
                                type="email"
                                label={t("E-mail address")}
                                placeholder="johndoe@email.com"
                            />
                            <Input
                                required
                                name="password"
                                type="password"
                                label={t("Password")}
                                className="mt-2.5"
                                placeholder="*****************"
                            />
                            <Input
                                required
                                name="password_confirmation"
                                type="password"
                                label={t("Confirm password")}
                                className="mt-2.5"
                                placeholder="*****************"
                            />

                            <div className="mt-8">
                                <Button
                                    type="submit"
                                    size="xl"
                                    className="w-full"
                                >
                                    {t("Sign up")}
                                </Button>
                            </div>

                            <div className="mt-5 text-center text-sm font-medium *:underline *:text-primary *:font-semibold">
                                {t("Already registered")} ?{" "}
                                <Link to="/login">{t("Sign in")}</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
}
