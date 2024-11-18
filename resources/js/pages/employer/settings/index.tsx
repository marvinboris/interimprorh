import { FormEvent } from "react";
import CompanySettings from "./company";
import NamePhoto from "./name-photo";
import SecuritySettings from "./security";
import SocialMedia from "./social-media";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { employerEdit, selectAuth } from "@/features";
import { isCompany } from "@/utils";

export function PageEmployerSettings() {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector(selectAuth);
    if (!isCompany(data)) return null;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get("name") as string;
        const email = form.get("email") as string;
        const phone = form.get("phone") as string;
        const location = form.get("location") as string;
        const logo = form.get("logo") as File;
        const maintenance =
            (form.get("maintenance") as string) === "on" ? 1 : 0;
        const oldPassword = form.get("oldPassword") as string;
        const newPassword = form.get("newPassword") as string;
        const confirmPassword = form.get("confirmPassword") as string;

        if (newPassword !== confirmPassword) return;

        dispatch(
            employerEdit({
                ...data,
                name,
                email,
                phone,
                location,
                logo: logo as unknown as string,
                maintenance: maintenance as unknown as boolean,
                oldPassword,
                password: newPassword,
            })
        );
    };

    return (
        <form
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            className="grid grid-cols-4 gap-4"
        >
            <div className="col-span-3 space-y-4">
                <CompanySettings />
                <SecuritySettings />
            </div>

            <div className="space-y-4">
                <NamePhoto />
            </div>
        </form>
    );
}
