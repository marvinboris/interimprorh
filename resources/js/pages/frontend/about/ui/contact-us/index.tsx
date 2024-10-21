import {
    Button,
    CustomSelect,
    Input,
    Loading,
    Section,
    SectionTitle,
    TextArea,
    Transition,
} from "@/components";
import { fetch } from "@/services";
import { Contact } from "@types";
import Block from "./block";
import React, { FormEvent } from "react";
import { Send } from "react-iconly";
import { v4 as uuidv4 } from "uuid";
import { Trans, useTranslation } from "react-i18next";

export default function ContactUs() {
    const [loading, setLoading] = React.useState(false);
    const { t } = useTranslation();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get("name") as string;
        const email = form.get("email") as string;
        const object = form.get("object") as string;
        const phone = form.get("phone") as string;
        const message = form.get("message") as string;

        const handle = async () => {
            setLoading(true);

            const contact = await fetch<Contact>({
                resource: "contacts",
                method: "POST",
                data: {
                    id: uuidv4(),
                    name,
                    email,
                    object,
                    phone,
                    message,
                },
            });

            if (contact) {
                // Sweet alert success message
            }

            setLoading(false);
        };

        handle();
    };

    return (
        <Section className="pt-24">
            <SectionTitle big className="text-center lg:text-left">
                <Trans i18nKey="Contact <1>us</1>">
                    Contact <span>us</span>
                </Trans>
            </SectionTitle>

            <div className="lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
                <form onSubmit={onSubmit} className="mt-7 relative">
                    <Transition show={loading}>
                        <Loading />
                    </Transition>

                    <div className="border border-neutral-200 rounded-2xl bg-stone-100 p-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                        <Input label={t("Your name")} name="name" />
                        <Input
                            label={t("Your email")}
                            type="email"
                            name="email"
                        />
                        <CustomSelect
                            label={t("Your object")}
                            name="object"
                            options={[
                                { value: "job", label: "Recherche d'emploi" },
                            ]}
                        />
                        <Input
                            label={t("Phone No.")}
                            type="tel"
                            name="phone"
                            placeholder="54 100 0003"
                        />
                        <TextArea
                            label={t("Your message")}
                            name="message"
                            className="md:col-span-2"
                        />
                    </div>

                    <div className="mt-4 lg:mt-11 text-center lg:text-left">
                        <Button size="xl" type="submit">
                            <span>{t("Send your message")}</span>
                            <Send size={24} />
                        </Button>
                    </div>
                </form>

                <div className="flex">
                    <div className="mx-auto sm:w-[500px] flex flex-wrap flex-col sm:flex-row justify-center gap-4 lg:gap-8">
                        <Block type="whatsapp" />
                        <Block type="office" />
                        <Block type="telegram" />
                        <Block type="skype" />
                    </div>
                </div>
            </div>
        </Section>
    );
}
