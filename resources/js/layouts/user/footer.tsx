import { Section } from "@/components";
import { useTranslation } from "react-i18next";

export default function UserFooter() {
    const { t } = useTranslation();

    return (
        <footer className="pt-5 pb-8 border-t border-neutral-200">
            <Section className="font-medium *:font-semibold">
                <span>Copyright 2024 |</span> . {t("All Rights Reserved")} |{" "}
                {t("Made by")} <span>Briluce Services</span>
            </Section>
        </footer>
    );
}
