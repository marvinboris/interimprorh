import UserNav from "./nav";
import { selectAuth } from "@/features";
import { useAppSelector } from "@/hooks";
import { isApplicant } from "@/utils";
import { Link, Outlet } from "react-router-dom";

export function LayoutUser() {
    const { data } = useAppSelector(selectAuth);
    if (!isApplicant(data)) return null;

    return (
        <main className="flex-1 flex flex-col">
            <UserNav />

            <Outlet />
        </main>
    );
}
