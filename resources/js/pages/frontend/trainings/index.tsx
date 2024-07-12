import { Header } from "@/components";
import HR from "./ui/hr";
import Accounting from "./ui/accounting";
import Quality from "./ui/quality";
import Communication from "./ui/communication";
import Logistics from "./ui/logistics";
import Law from "./ui/law";
import { useTranslation } from "react-i18next";

export function PageTrainings() {
    const { t } = useTranslation();

    return (
        <>
            <Header>{t("Our trainings")}</Header>
            <div className="pt-12 *:pb-24">
                <HR />
                <Accounting />
                <Logistics />
                <Quality />
                <Law />
                <Communication />
            </div>
        </>
    );
}
