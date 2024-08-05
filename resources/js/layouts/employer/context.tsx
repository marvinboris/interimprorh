import React, { createContext, useContext } from "react";

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
  const [open, setJustOpen] = React.useState(false);
  const menus: Record<string, string[]> = {
    "/employer": ["Dashboard", "Overview"],
    "/employer/applications": ["Applications", "Job post"],
    "/employer/applications/add": ["Job posting", "Post a job"],
    "/employer/settings": ["Settings", "System settings"],
  };

  const setOpen = (value: boolean) => {
    localStorage.setItem("sideDrawerOpen", value.toString());
    setJustOpen(value);
  };

  React.useEffect(() => {
    const sideDrawerOpen = localStorage.getItem("sideDrawerOpen") === "true";
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
