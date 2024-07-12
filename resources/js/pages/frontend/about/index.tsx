import { Header } from "@/components";
import Who from "./ui/who";
import Vision from "./ui/vision";
import Mission from "./ui/mission";
import Team from "./ui/team";
import { Trans, useTranslation } from "react-i18next";

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
            <Mission />
            <Vision />
            <Team />
        </>
    );
}
