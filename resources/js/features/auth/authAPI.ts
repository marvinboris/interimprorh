import { Admin, Applicant, Company, Message } from "@types";
import axios from "axios";

export const getCheck = async () => {
    const res = await axios.get<{
        role: string;
        data: Admin | Applicant | Message;
    }>("/api/account");
    return res.data;
};

// Login
export const postUserLogin = async (data: {
    email: string;
    password: string;
}) => {
    const res = await axios.post<{
        token: string;
        expires_at: number;
        data: Applicant | Message;
    }>("/api/login", data);
    return res.data;
};

export const postEmployerLogin = async (data: {
    email: string;
    password: string;
}) => {
    const res = await axios.post<{
        token: string;
        expires_at: number;
        data: Company | Message;
    }>("/api/employer/login", data);
    return res.data;
};

export const postAdminLogin = async (data: {
    email: string;
    password: string;
}) => {
    const res = await axios.post<{
        token: string;
        expires_at: number;
        data: Admin | Message;
    }>("/api/admin/login", data);
    return res.data;
};

// Edit user
export const patchUser = async (data: Applicant) => {
    const res = await axios.patch<Applicant>("/api/user", data);
    delete res.data.password;
    return res.data;
};
