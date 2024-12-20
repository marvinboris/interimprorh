import { logout } from "@/features";
import { useLayoutAdminContext } from "../context";
import NavItem from "./nav-item";
import { Logo, Transition } from "@/components";
import { useAppDispatch, useWindowSize } from "@/hooks";
import { Building, Home, Logout, PathTool, Setting } from "iconsax-react";
import { useTranslation } from "react-i18next";
import { Work } from "react-iconly";
import { Link } from "react-router-dom";

export default function SideDrawer() {
    const dispatch = useAppDispatch();
    const { open, setOpen } = useLayoutAdminContext();
    const { width } = useWindowSize();

    const { t } = useTranslation();

    return (
        <Transition show={(width && width >= 1024) || open}>
            <div className="absolute inset-0 z-50 lg:static">
                <div
                    className="absolute inset-0 lg:hidden bg-white/50 backdrop-blur-sm -z-10 cursor-pointer"
                    onClick={() => setOpen(false)}
                />

                <aside className="w-72 h-screen bg-white px-4 md:px-8 flex flex-col overflow-hidden border-r md:border-r-none">
                    <Link
                        to="/"
                        className="block mt-3 md:mt-5 xl:mt-7 mb-5 md:mb-9 xl:mb-14"
                    >
                        <Logo />
                    </Link>

                    <nav className="flex-1 flex-col overflow-auto">
                        <NavItem
                            href="/employer/applications"
                            icon={Work}
                            name={t("Applications")}
                        />
                        <NavItem
                            href="/employer/requests"
                            icon={Work}
                            name={t("Requests")}
                        />
                        <NavItem
                            href="/employer/settings"
                            exact
                            icon={Setting}
                            name={t("Settings")}
                        />

                        <div
                            className="mt-auto cursor-pointer"
                            onClick={() => dispatch(logout())}
                        >
                            <NavItem
                                href="/"
                                inactive
                                icon={Logout}
                                name={t("Logout")}
                            />
                        </div>
                    </nav>
                </aside>
            </div>
        </Transition>
    );
}

function UserInformation(props: React.ComponentProps<"svg">) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M13.9614 5.39453H16.6556C19.2116 5.39453 20.7976 7.1994 20.7976 9.7554V16.648C20.7976 19.1962 19.2116 21.0011 16.6469 21.0011H7.65364C5.09764 21.0011 3.50391 19.1962 3.50391 16.648V9.7554C3.50391 7.1994 5.1064 5.39453 7.65364 5.39453H10.3371"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.8965 10.6445H17.5527M14.8965 13.8908L17.5527 13.9336M15.8923 17.2245H17.5522"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.85645 17.4427C6.85645 16.5427 7.56672 15.4219 9.61287 15.4219C11.66 15.4219 12.3703 16.535 12.3703 17.435"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.3737 11.7142C11.3737 12.6872 10.5856 13.4753 9.61265 13.4753C8.63967 13.4753 7.85156 12.6872 7.85156 11.7142C7.85156 10.7412 8.63967 9.95312 9.61265 9.95312C10.5856 9.95312 11.3737 10.7412 11.3737 11.7142Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5556 7.57104L12.3141 8.19471C12.2138 8.24531 12.0961 8.24531 11.9949 8.19569L10.7456 7.57104C10.5053 7.45039 10.3535 7.2052 10.3535 6.93666V4.00216C10.3535 3.44854 10.8021 3 11.3567 3H12.9436C13.4972 3 13.9467 3.44854 13.9467 4.00216V6.93763C13.9467 7.20617 13.7949 7.45039 13.5556 7.57104Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
