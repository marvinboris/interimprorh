import { Admin, Applicant, Company, Message } from "@types";
import axios, { AxiosError } from "axios";

const handlePromise = async <T>(fn: () => Promise<T>) => {
    try {
        return await fn();
    } catch (error) {
        return (error as AxiosError).response?.data as Message;
    }
};

export const getCheck = async () =>
    handlePromise(async () => {
        const res = await axios.get<{
            role: string;
            data: Admin | Applicant | Message;
        }>("/api/account");
        return res.data;
    });

// Login
export const postUserLogin = async (data: {
    email: string;
    password: string;
}) =>
    handlePromise(async () => {
        const res = await axios.post<{
            token: string;
            expires_at: number;
            data: Applicant | Message;
        }>("/api/login", data);
        return res.data;
    });

export const postUserForgot = async (email: string) =>
    handlePromise(async () => {
        const res = await axios.post<Message>("/api/forgot", { email });
        return res.data;
    });

export const postUserReset = async (data: {
    email: string;
    time: string;
    token: string;
    password: string;
}) =>
    handlePromise(async () => {
        const res = await axios.post<Message>("/api/reset", data);
        return res.data;
    });

export const postEmployerLogin = async (data: {
    email: string;
    password: string;
}) =>
    handlePromise(async () => {
        const res = await axios.post<{
            token: string;
            expires_at: number;
            data: Company | Message;
        }>("/api/employer/login", data);
        return res.data;
    });

export const postEmployerForgot = async (email: string) =>
    handlePromise(async () => {
        const res = await axios.post<Message>("/api/employer/forgot", {
            email,
        });
        return res.data;
    });

export const postEmployerReset = async (data: {
    email: string;
    time: string;
    token: string;
    password: string;
}) =>
    handlePromise(async () => {
        const res = await axios.post<Message>("/api/employer/reset", data);
        return res.data;
    });

export const postAdminLogin = async (data: {
    email: string;
    password: string;
}) =>
    handlePromise(async () => {
        const res = await axios.post<{
            token: string;
            expires_at: number;
            data: Admin | Message;
        }>("/api/admin/login", data);
        return res.data;
    });

// Edit user
export const patchUser = async (data: Applicant) =>
    handlePromise(async () => {
        delete data.resume;
        const res = await axios.patch<Applicant>("/api/user", data);
        delete res.data.password;
        return res.data;
    });

function extractJsonFromResponse(responseText: string): string {
    // Use a regex to find the JSON part (assuming it starts with a '{' or '[')
    const jsonStart = responseText.indexOf("{");
    if (jsonStart === -1) {
        throw new Error("No valid JSON found in the response");
    }

    // Extract the part starting from the JSON object
    const jsonString = responseText.slice(jsonStart);

    // Optionally: handle cases where there might be trailing HTML or non-JSON content
    const jsonEnd = jsonString.lastIndexOf("}");
    return jsonString.slice(0, jsonEnd + 1); // Extract the complete JSON string
}

export const postUserResume = async (data: FormData) =>
    handlePromise(async () => {
        const res = await axios.post("/api/user/resume", data, {
            responseType: "text",
        });

        // Assume the HTML part is preceding the JSON part and remove it
        const cleanJson = extractJsonFromResponse(res.data);

        // Parse the cleaned JSON string to a JavaScript object
        const resData = JSON.parse(cleanJson) as Applicant;

        delete resData.password;
        return resData;
    });

export const patchEmployer = async (data: Company | FormData) =>
    handlePromise(async () => {
        const res = await axios.post("/api/employer", data, {
            responseType: 'text',
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        // Assume the HTML part is preceding the JSON part and remove it
        const cleanJson = extractJsonFromResponse(res.data);

        // Parse the cleaned JSON string to a JavaScript object
        const resData = JSON.parse(cleanJson) as Company;

        delete resData.password;
        return resData;
    });
