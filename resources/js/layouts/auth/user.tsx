import { selectAuth } from "@/features/auth/authSlice";
import { useAppSelector } from "@/hooks";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function LayoutAuthUesr() {
    const { token } = useAppSelector(selectAuth);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (token) navigate("/user");
    }, [token]);

    return <Outlet />;
}
