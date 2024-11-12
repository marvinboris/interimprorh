import {
    Section,
    Loading,
    Alert,
    Input,
    Button,
    Transition,
} from "@/components";
import { useMessageContext } from "@/contexts";
import { selectAuth, userEdit } from "@/features";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { isApplicant } from "@/utils";
import { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import Body from "./ui/body";
import Header from "./ui/header";
import { Status } from "@/enums";
import { i18nKey } from "@types";

export function PageUserProfile() {
    const { data, message, status } = useAppSelector(selectAuth);
    if (!isApplicant(data)) return null;

    const { setMessage } = useMessageContext();

    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const loading = status === Status.LOADING;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const last_name = form.get("last_name") as string | null;
        const first_name = form.get("first_name") as string | null;
        const password = form.get("password") as string | null;
        const email = form.get("email") as string | null;
        const phone = form.get("phone") as string | null;
        const password_confirmation = form.get("password_confirmation") as
            | string
            | null;

        if (
            !last_name ||
            !first_name ||
            !email ||
            !phone ||
            (password && password !== password_confirmation)
        )
            return setMessage({
                type: "danger",
                content: t("Missing information"),
            });
        if (password && password === password_confirmation)
            dispatch(
                userEdit({
                    ...data,
                    last_name,
                    first_name,
                    email,
                    phone,
                    password,
                    password_confirmation,
                })
            );
        else {
            dispatch(
                userEdit({ ...data, last_name, first_name, email, phone })
            );
        }
    };

    return (
        <div className="divide-y divide-neutral-200">
            <Header />

            <div>
                <Section className="relative">
                    <Transition show={loading}>
                        <div className="absolute inset-0 z-10">
                            <Loading />
                        </div>
                    </Transition>

                    <form
                        onSubmit={onSubmit}
                        className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 xl:gap-6 py-6"
                    >
                        <Alert
                            color={message?.type}
                            className="md:col-span-2 xl:col-span-3"
                        >
                            {message?.content && t(message.content as i18nKey)}
                        </Alert>

                        <Input
                            name="last_name"
                            placeholder="James"
                            defaultValue={data.last_name}
                        />
                        <Input
                            name="first_name"
                            placeholder="Stephy"
                            defaultValue={data.first_name}
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder={t("New password")}
                        />
                        <Input
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder="stephyjames@gmail.com"
                        />
                        <Input
                            type="tel"
                            name="phone"
                            placeholder="+237 6 90 55 48 99"
                            defaultValue={data.phone}
                        />
                        <Input
                            type="password"
                            name="password_confirmation"
                            placeholder={t("Confirm password")}
                        />

                        <Button type="submit" className="mt-7">
                            {t("Save")}
                        </Button>
                    </form>
                </Section>
            </div>
        </div>
    );
}

export * from "./resume";
export * from "./questionnaire";
