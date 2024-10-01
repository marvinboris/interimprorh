import {
    getCheck,
    patchUser,
    postUserResume,
    postAdminLogin,
    postEmployerLogin,
    postUserLogin,
} from "./authAPI";
import { Status } from "@/enums";
import { AppState } from "@/store";
import { message, setAuthToken } from "@/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Admin, Applicant, Company, Message } from "@types";

interface AuthState {
    token: string | null;
    data: Admin | Company | Applicant | null;
    role?: string;
    status: Status;
    message: Message | null;
}

const initialState: AuthState = {
    token: null,
    data: null,
    status: Status.IDLE,
    message: null,
};

export const userLogin = createAsyncThunk(
    "auth/user/login",
    async (data: { email: string; password: string }) =>
        await postUserLogin(data)
);
export const userEdit = createAsyncThunk(
    "auth/user/edit",
    async (data: Applicant) => await patchUser(data)
);
export const userResumeEdit = createAsyncThunk(
    "auth/user/resume/edit",
    async (data: FormData) => await postUserResume(data)
);
export const check = createAsyncThunk("auth/check", async () => {
    const token = localStorage.getItem("token");
    if (token) {
        setAuthToken(token);
        return await getCheck();
    }
});
const checkAuthTimeout = createAsyncThunk(
    "auth/timeout",
    (expirationTime: number) => {
        setTimeout(() => logout(), expirationTime);
    }
);

export const employerLogin = createAsyncThunk(
    "auth/employer/login",
    async (data: { email: string; password: string }) =>
        await postEmployerLogin(data)
);
export const adminLogin = createAsyncThunk(
    "auth/admin/login",
    async (data: { email: string; password: string }) =>
        await postAdminLogin(data)
);

const dataLoading = (state: AuthState) => {
    state.status = Status.LOADING;
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        logout: (state) => {
            setAuthToken();
            localStorage.removeItem("token");
            localStorage.removeItem("expirationDate");

            state.token = null;
            state.data = null;
            state.status = Status.IDLE;
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, dataLoading)
            .addCase(userLogin.fulfilled, (state, action) => {
                if ("content" in action.payload.data)
                    state.message = action.payload.data;
                else {
                    localStorage.setItem("token", action.payload.token);
                    localStorage.setItem(
                        "expirationDate",
                        new Date(action.payload.expires_at).toString()
                    );

                    delete action.payload.data.password;
                    state.token = action.payload.token;
                    state.data = action.payload.data;
                    state.role = "user";
                    state.status = Status.IDLE;

                    checkAuthTimeout(
                        action.payload.expires_at - new Date().getTime()
                    );
                }
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.token = null;
                state.data = null;
                if (action.error.message)
                    state.message = message(action.error.message, "danger");
                state.status = Status.FAILED;
            })

            .addCase(employerLogin.pending, dataLoading)
            .addCase(employerLogin.fulfilled, (state, action) => {
                if ("content" in action.payload.data)
                    state.message = action.payload.data;
                else {
                    localStorage.setItem("token", action.payload.token);
                    localStorage.setItem(
                        "expirationDate",
                        new Date(action.payload.expires_at).toString()
                    );

                    state.token = action.payload.token;
                    state.data = action.payload.data;
                    state.role = "employer";
                    state.status = Status.IDLE;

                    checkAuthTimeout(
                        action.payload.expires_at - new Date().getTime()
                    );
                }
            })
            .addCase(employerLogin.rejected, (state, action) => {
                state.token = null;
                state.data = null;
                if (action.error.message)
                    state.message = message(action.error.message, "danger");
                state.status = Status.FAILED;
            })

            .addCase(userEdit.pending, dataLoading)
            .addCase(userEdit.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = Status.IDLE;
            })
            .addCase(userEdit.rejected, (state, action) => {
                if (action.error.message)
                    state.message = message(action.error.message, "danger");
                state.status = Status.FAILED;
            })

            .addCase(userResumeEdit.pending, dataLoading)
            .addCase(userResumeEdit.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = Status.IDLE;
            })
            .addCase(userResumeEdit.rejected, (state, action) => {
                if (action.error.message)
                    state.message = message(action.error.message, "danger");
                state.status = Status.FAILED;
            })

            .addCase(check.pending, dataLoading)
            .addCase(check.fulfilled, (state, action) => {
                if (action.payload && action.payload.data) {
                    if (!("content" in action.payload.data)) {
                        const token = localStorage.getItem("token");

                        setAuthToken(token);
                        state.token = token;
                        delete action.payload.data.password;
                        state.data = action.payload.data;
                        state.role = action.payload.role;
                        state.status = Status.IDLE;

                        checkAuthTimeout(
                            new Date(
                                localStorage.getItem("expirationDate")!
                            ).getTime() - new Date().getTime()
                        );
                    }
                } else {
                    setAuthToken();
                    state.token = null;
                    state.data = null;
                    state.role = undefined;
                    state.status = Status.FAILED;
                }
            })
            .addCase(check.rejected, (state, action) => {
                if (
                    action.error.message &&
                    action.error.message.includes("401")
                ) {
                    setAuthToken();
                    localStorage.removeItem("token");
                    localStorage.removeItem("expirationDate");
                    location.reload();
                }
                state.token = null;
                state.data = null;
                state.status = Status.FAILED;
            })

            .addCase(adminLogin.pending, dataLoading)
            .addCase(adminLogin.fulfilled, (state, action) => {
                if ("content" in action.payload.data)
                    state.message = action.payload.data;
                else {
                    localStorage.setItem("token", action.payload.token);
                    localStorage.setItem(
                        "expirationDate",
                        new Date(action.payload.expires_at).toString()
                    );

                    delete action.payload.data.password;
                    state.token = action.payload.token;
                    state.data = action.payload.data;
                    state.role = "admin";
                    state.status = Status.IDLE;

                    checkAuthTimeout(
                        action.payload.expires_at - new Date().getTime()
                    );
                }
            })
            .addCase(adminLogin.rejected, (state, action) => {
                state.token = null;
                state.data = null;
                if (action.error.message)
                    state.message = message(action.error.message, "danger");
                state.status = Status.FAILED;
            });
    },
});

export const { logout } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const selectAuth = (state: AppState) => state.auth;

export default authSlice.reducer;
