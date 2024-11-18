import { Button, Input } from "@/components";
import { Copy } from "iconsax-react";
import { useTranslation } from "react-i18next";
import { Work } from "react-iconly";

export default function SecuritySettings() {
    const { t } = useTranslation();
    return (
        <div className="bg-white rounded-3xl border border-neutral-200 px-10 pt-9 pb-20">
            <header className="border-b border-neutral-200 pb-4 flex items-center gap-6">
                <div className="text-neutral-200">
                    <Work size={48} />
                </div>

                <div>
                    <div className="text-2xl font-bold">
                        {t("Security settings")}
                    </div>
                    <div className="text-sm font-medium">
                        {t("Change password")}
                    </div>
                </div>
            </header>

            <div className="mt-12 grid grid-cols-2 gap-5">
                <Input
                    name="oldPassword"
                    type="password"
                    label={t("Old password")}
                />
                <Input
                    name="newPassword"
                    type="password"
                    label={t("New password")}
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    label={t("Confirm password")}
                />

                <div />
                {/* <Input
                    name="otp"
                    label={t("OTP code")}
                    append={<Copy className="text-primary size-6" />}
                /> */}

                <div className="mt-14">
                    <Button size="xl" type="submit" className="w-full">
                        {t("Save settings")}
                    </Button>
                </div>
            </div>
        </div>
    );
}
