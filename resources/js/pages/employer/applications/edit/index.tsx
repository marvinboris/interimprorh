import { Alert, Button, FormSteps, Loading } from "@/components";
import { Step1, Step2, Step3, Step4, Step5 } from "./steps";
import React, { FormEvent } from "react";
import { ArrowRight } from "react-iconly";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/hooks";
import { selectAuth } from "@/features";
import { i18nKey, Message } from "@types";
import { JobProvider } from "./context";

export function PageEmployerApplicationsEdit() {
    const { t } = useTranslation();

    const { token } = useAppSelector(selectAuth);
    const formRef = React.useRef<HTMLFormElement>(null);

    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState<Message>();
    const [step, setStep] = React.useState(1);
    if (!token) return null;
    const steps = [
        <Step1 key="step-1" />,
        <Step2 key="step-2" />,
        <Step3 key="step-3" />,
        <Step4 key="step-4" />,
        <Step5 key="step-5" />,
    ];

    const done = step === steps.length;

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await handleSubmit();
    };

    const handleSubmit = async () => {
        const current = formRef.current;
        if (!current) return;

        const form = new FormData(current);
        const data: Record<string, string | string[] | null> = {};
        for (const key of form.keys()) {
            const value = key.includes("[]") ? form.getAll(key) : form.get(key);
            data[key.split("[]").join("")] = value as string | string[] | null;
        }

        setLoading(true);
        setMessage(undefined);
        try {
            const res = await fetch("/api/employer/jobs", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: token,
                },
            });
            await res.json();

            setMessage(
                res.ok
                    ? {
                          content: t("Job created"),
                          type: "success",
                      }
                    : {
                          content: t("Job creation failed"),
                          type: "danger",
                      }
            );
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    return (
        <JobProvider>
            <form
                ref={formRef}
                onSubmit={onSubmit}
                className="relative z-0 rounded-xl md:rounded-2xl xl:rounded-3xl bg-white p-4 md:p-8 xl:p-12 grid md:grid-cols-2 xl:grid-cols-3 gap-1.5 md:gap-2.5 xl:gap-x-3.5 gap-y-3 md:gap-y-5 xl:gap-y-7"
            >
                <Loading show={loading} />

                <Alert
                    className="md:col-span-2 xl:col-span-3"
                    color={message?.type}
                >
                    {message?.content && t(message.content as i18nKey)}
                </Alert>

                <FormSteps active={step} options={steps} />

                <div className="mt-4 md:mt-5 xl:mt-6">
                    <Button
                        size="xl"
                        className="w-full"
                        onClick={
                            done ? handleSubmit : () => setStep((s) => s + 1)
                        }
                    >
                        <span>{t(done ? "Submit" : "Continue")}</span>
                        <ArrowRight size={20} />
                    </Button>
                </div>

                <div className="mt-4 md:mt-5 xl:mt-6 px-3 flex items-center">
                    Step {step} of {steps.length}
                </div>
            </form>
        </JobProvider>
    );
}
