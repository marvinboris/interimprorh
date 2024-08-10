import { useTranslation } from "react-i18next";
import Item from "./item";

export default function Nav() {
    const { t } = useTranslation();

    return (
        <nav className="flex flex-col lg:flex-row lg:items-center gap-3.5 font-display">
            <Item exact href="/">
                {t("Home")}
            </Item>
            <Item href="/about">{t("About us")}</Item>
            <Item href="/careers">{t("Careers")}</Item>
            <Item href="/employer">{t("Employer area")}</Item>
            <Item href="/trainings">{t("Trainings")}</Item>
            <Item href="/contact">{t("Contact")}</Item>
        </nav>
    );
}
