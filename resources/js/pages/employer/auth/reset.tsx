import { Polygon1, Polygon2 } from "./ui/polygons";
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
import { selectAuth, employerReset } from "@/features";
import { useAppDispatch, useAppSelector } from "@/hooks";
import React, { FormEvent } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { i18nKey, Message } from "@types";

export function PageAuthEmployerReset() {
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const { token, status, message: authMessage } = useAppSelector(selectAuth);
    const [message, setMessage] = React.useState<Message | null>();
    React.useEffect(() => {
        setMessage(authMessage);
    }, [authMessage]);

    const loading = status === Status.LOADING;

    const formRef = React.useRef<HTMLFormElement>(null);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = formRef.current;
        if (!form) return;

        const formData = new FormData(form);

        const password = formData.get("password") as string | null;
        const passwordConfirmation = formData.get("password_confirmation") as
            | string
            | null;

        const email = params.get("email");
        const time = params.get("time");
        const token = params.get("token");

        if (
            !loading &&
            password &&
            password === passwordConfirmation &&
            email &&
            time &&
            token
        )
            dispatch(
                employerReset({
                    email,
                    time,
                    token,
                    password,
                })
            );
    };

    React.useEffect(() => {
        if (token) navigate("/employer/dashboard");
    }, [navigate, token]);

    return (
        <div className="bg-stone-100 py-16 lg:py-32 relative overflow-clip lg:overflow-visible flex-1 flex items-center">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-3/5">
                <Polygon1 />
            </div>

            <Section className="flex items-center flex-col lg:flex-row gap-12 lg:px-16">
                <SectionTitle className="flex-1">
                    <Trans i18nKey="Reset your password">
                        <span>Reset your password</span> to access <br /> your
                        account.
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
                            {t("Reset here")}
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
                                {message?.content && t(message.content as i18nKey)}
                            </Alert>

                            <Input
                                required
                                name="password"
                                type="password"
                                label={t("Password")}
                                placeholder="***************"
                            />

                            <Input
                                required
                                name="password_confirmation"
                                type="password"
                                label={t("Confirm password")}
                                placeholder="***************"
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
