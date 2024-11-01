import { Header } from "@/components";
import Who from "./ui/who";
import Vision from "./ui/vision";
import Mission from "./ui/mission";
import Team from "./ui/team";
import { Trans, useTranslation } from "react-i18next";
import Accompaniement from "./ui/accompaniement";
import Career from "./ui/career";
import ContactUs from "./ui/contact-us";
import Faq from "./ui/faq";
import News from "./ui/news";
import Testimonies from "./ui/testimonies";
import Values from "./ui/values";

export function PageAbout() {
    const { t } = useTranslation();

    return (
        <>
            <Header>
                <Trans i18nKey="About <1>us</1>">
                    About <span>us</span>
                </Trans>
            </Header>
            <Who />
            <Vision />
            <Mission />
            <Values />
            {/* <Career /> */}
            {/* <Accompaniement /> */}
            {/* <Testimonies /> */}
            {/* <Faq /> */}
            {/* <ContactUs /> */}
            {/* <News /> */}
            {/* <Team /> */}
        </>
    );
}
