import { Polygon1 } from "./ui/polygons";
import { useCompanyActivities } from "@/hooks";
import {
    Alert,
    Button,
    CustomSelect,
    Input,
    Loading,
    Section,
    SectionTitle,
    Transition,
} from "@/components";
import { i18nKey, Message } from "@types";
import { ArrowRight } from "iconsax-react";
import React, { FormEvent } from "react";
import { Trans, useTranslation } from "react-i18next";

export function PageAuthEmployer() {
    const { options } = useCompanyActivities();
    const { t } = useTranslation();

    const formRef = React.useRef<HTMLFormElement>(null);

    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState<Message>();

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = formRef.current;
        if (!form) return;

        const formData = new FormData(form);

        const name = formData.get("name") as string | null;
        const activity = formData.get("activity") as string | null;
        const email = formData.get("email") as string | null;
        const phone = formData.get("phone") as string | null;
        const password = formData.get("password") as string | null;
        const password_confirmation = formData.get("password_confirmation") as
            | string
            | null;

        if (password !== password_confirmation)
            return setMessage({
                content: t("Incorrect password confirmation"),
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
                    name,
                    activity,
                    email,
                    phone,
                    password,
                    password_confirmation,
                }),
            });
            const data = (await res.json()) as { email: string };
            setMessage({
                content: t(
                    `Company successfully created. E-mail sent to: {{email}}`,
                    { email: data.email }
                ),
                type: "success",
            });
            form.reset();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <div className="py-16 lg:py-32 relative flex-1 flex items-center">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-3/5">
                <Polygon1 />
            </div>

            <Section className="flex items-center flex-col lg:flex-row gap-12">
                <SectionTitle className="flex-1">
                    <Trans i18nKey="Employer <br /> <3>Sign up.</3> Create <br /> your account">
                        Employer <br /> <span>Sign up.</span> Create <br /> your
                        account
                    </Trans>
                </SectionTitle>

                <form
                    ref={formRef}
                    onSubmit={onSubmit}
                    className="flex-1 sm:w-[415px] lg:w-auto grid lg:grid-cols-2 gap-x-4 gap-y-4 lg:gap-y-8 relative"
                >
                    <Transition show={loading}>
                        <div className="absolute z-10 inset-0 bg-white/50 backdrop-blur-sm">
                            <Loading />
                        </div>
                    </Transition>

                    <Alert
                        color={message?.type}
                        closable={false}
                        className="lg:col-span-2"
                    >
                        {message?.content && t(message.content as i18nKey)}
                    </Alert>

                    <Input
                        required
                        name="name"
                        label={t("Company name")}
                        placeholder="Interim Pro RH"
                    />
                    <CustomSelect
                        name="activity"
                        label={t("Company activity")}
                        options={options}
                    />
                    <Input
                        required
                        name="email"
                        type="email"
                        label={t("Company e-mail")}
                        placeholder="int@email.com"
                    />
                    <Input
                        required
                        name="phone"
                        type="tel"
                        label={t("Phone No.")}
                        placeholder="54 100 0003"
                    />
                    <Input
                        required
                        name="password"
                        type="password"
                        label={t("Password")}
                        placeholder="*****************"
                    />
                    <Input
                        required
                        name="password_confirmation"
                        type="password"
                        label={t("Confirm password")}
                        placeholder="*****************"
                    />

                    <div className="mt-8">
                        <Button type="submit" size="xl" className="w-full">
                            {t("Continue")}
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </form>
            </Section>
        </div>
    );
}
