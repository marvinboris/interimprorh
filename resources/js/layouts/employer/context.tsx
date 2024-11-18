import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

const LayoutAdminContext = createContext<{
    open: boolean;
    setOpen: (open: boolean) => void;
    menus: Record<string, string[]>;
}>({
    open: false,
    setOpen: () => {},
    menus: {},
});

export const useLayoutAdminContext = () => useContext(LayoutAdminContext);

export const LayoutAdminContextProvider = ({
    children,
}: {
    children?: React.ReactNode;
}) => {
    const { t } = useTranslation();
    const [open, setJustOpen] = React.useState(false);
    const menus: Record<string, string[]> = {
        "/employer": [t("Dashboard"), t("Overview")],
        "/employer/requests": [t("Requests"), t("Job post")],
        "/employer/applications": [t("Applications"), t("Job post")],
        "/employer/applications/add": [t("Job posting"), t("Post a job")],
        "/employer/settings": [t("Settings"), t("System settings")],
    };

    const setOpen = (value: boolean) => {
        localStorage.setItem("sideDrawerOpen", value.toString());
        setJustOpen(value);
    };

    React.useEffect(() => {
        const sideDrawerOpen =
            localStorage.getItem("sideDrawerOpen") === "true";
        setOpen(sideDrawerOpen);

        return () => {
            localStorage.setItem("sideDrawerOpen", open.toString());
            //   setMessage(undefined);
        };
    }, []);

    return (
        <LayoutAdminContext.Provider value={{ open, setOpen, menus }}>
            {children}
        </LayoutAdminContext.Provider>
    );
};
