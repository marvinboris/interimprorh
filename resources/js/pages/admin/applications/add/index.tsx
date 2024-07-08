import { Button, FormSteps } from "@/components";
import { Step1, Step2, Step3, Step4 } from "./steps";
import React, { FormEvent } from "react";
import { ArrowRight } from "react-iconly";
import { useTranslation } from "react-i18next";

export function PageAdminApplicationsAdd() {
    const { t } = useTranslation();

    const [step, setStep] = React.useState(1);
    const steps = [
        <Step1 key="step-1" />,
        <Step2 key="step-2" />,
        <Step3 key="step-3" />,
        <Step4 key="step-4" />,
    ];

    const done = step === steps.length;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const data: Record<string, string | string[] | null> = {};
        for (const [key, value] of form.entries()) {
            data[key] = value as string | string[] | null;
        }
        console.log(data);
    };

    return (
        <form
            onSubmit={onSubmit}
            className="relative rounded-xl md:rounded-2xl lx:rounded-3xl bg-white p-4 md:p-8 xl:p-12 grid md:grid-cols-2 xl:grid-cols-3 gap-1.5 md:gap-2.5 xl:gap-x-3.5 gap-y-3 md:gap-y-5 xl:gap-y-7"
        >
            <FormSteps active={step} options={steps} />

            <div className="mt-4 md:mt-5 xl:mt-6">
                <Button
                    size="xl"
                    className="w-full"
                    type={done ? "submit" : "button"}
                    onClick={done ? undefined : () => setStep((s) => s + 1)}
                >
                    <span>{t(done ? "Submit" : "Continue")}</span>
                    <ArrowRight size={20} />
                </Button>
            </div>

            <div className="mt-4 md:mt-5 xl:mt-6 px-3 flex items-center">
                Step {step} of {steps.length}
            </div>
        </form>
    );
}
