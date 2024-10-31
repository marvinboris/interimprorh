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
import { Status } from "@/enums";
import { selectAuth, userForgot } from "@/features";
import { useAppDispatch, useAppSelector } from "@/hooks";
import React, { FormEvent } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function PageAuthForgot() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const { token, status, message } = useAppSelector(selectAuth);

    const loading = status === Status.LOADING;

    const formRef = React.useRef<HTMLFormElement>(null);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = formRef.current;
        if (!form) return;

        const formData = new FormData(form);

        const email = formData.get("email") as string | null;

        if (!loading && email) dispatch(userForgot(email));
    };

    React.useEffect(() => {
        if (token) navigate("/user/dashboard");
    }, [navigate, token]);

    return (
        <div className="bg-stone-100 py-16 lg:py-32 relative overflow-clip lg:overflow-visible flex-1 flex items-center">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-3/5">
                <Polygon1 />
            </div>

            <Section className="flex items-center flex-col lg:flex-row gap-12 lg:px-16">
                <SectionTitle className="flex-1">
                    <Trans i18nKey="Forgot password?">
                        Forgot password? <br /><span>Reset it</span> to access{" "}
                        <br /> your account.
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
                            {t("Forgot password")}
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

                            <div className="mt-8">
                                <Button
                                    type="submit"
                                    size="xl"
                                    className="w-full"
                                >
                                    {t("Reset here")}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
}
