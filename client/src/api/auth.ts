import { isAxiosError } from "axios";

// Axios config
import { api } from "../config/axios";

// Types
import {
    ConfirmAccountForm,
    ForgotPasswordForm,
    LoginForm,
    RegisterForm,
    ResetPasswordForm,
    User,
    ValidateCodeForm
} from "../types/auth";

export async function createAccount (userData: RegisterForm) {
    try {
        const { data } = await api.post("/auth/register", userData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}

export async function login (userData: LoginForm) {
    try {
        const { data } = await api.post("/auth/login", userData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(`${error.response.data.error}`);
        }
        throw new Error(`${error}`)
    }
}

export async function confirmAccount (userData: ConfirmAccountForm) {
    try {
        const { data } = await api.post("/auth/confirm-account", userData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(`${error.response.data.error}`);
        }
        throw new Error(`${error}`)
    }
}

export async function forgotPassword (userData: ForgotPasswordForm) {
    try {
        const { data } = await api.post("/auth/forgot-password", userData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(`${error.response.data.error}`);
        }
        throw new Error(`${error}`)
    }
}

export async function validateCode (userData: ValidateCodeForm) {
    try {
        const { data } = await api.post("/auth/validate-code", userData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(`${error.response.data.error}`);
        }
        throw new Error(`${error}`)
    }
}

export async function resetPassword (userData: ResetPasswordForm, token: number) {
    try {
        const { data } = await api.post(`/auth/reset-password/${token}`, userData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(`${error.response.data.error}`);
        }
        throw new Error(`${error}`)
    }
}

export async function getUser () {
    try {
        const { data } = await api<User>(`/auth/user`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(`${error.response.data.error}`);
        }
        throw new Error(`${error}`)
    }
}