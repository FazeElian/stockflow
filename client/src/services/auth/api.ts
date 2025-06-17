import { isAxiosError } from "axios";

// API Axios config
import { api } from "../../config/axios";

// Types
import type {
    ConfirmAccountForm,
    ForgotPasswordForm,
    LoginForm,
    RegisterForm,
    ResetPasswordForm,
    User,
    ValidateCodeForm,
} from "../../lib/types/services/auth/user.type";

export async function registerUser (userData: RegisterForm) {
    try {
        const { data } = await api.post("/auth/register", userData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const message = error.response.data.error || "Ha ocurrido un error, Inténtelo más tarde";
            throw new Error(message);
        }
        return new Error(`${error}`)
    }
}

export async function login (userData: LoginForm) {
    try {
        const { data } = await api.post("/auth/login", userData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const message = error.response.data.error || "Ha ocurrido un error, Inténtelo más tarde";
            throw new Error(message);
        }
        return new Error(`${error}`)
    }
}

export async function getUser () {
    try {
        const { data } = await api<User>("/auth/user");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const message = error.response.data.error;
            throw new Error(message);
        }
        return new Error(`${error}`)
    }
}

export async function forgotPassword (userData: ForgotPasswordForm) {
    try {
        const { data } = await api.post("/auth/forgot-password", userData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const message = error.response.data.error || "Ha ocurrido un error, Inténtelo más tarde";
            throw new Error(message);
        }
        return new Error(`${error}`)
    }
}

export async function confirmAccount (userData: ConfirmAccountForm) {
    try {
        const { data } = await api.post("/auth/confirm-account", userData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const message = error.response.data.error || "Ha ocurrido un error, Inténtelo más tarde";
            throw new Error(message);
        }
        return new Error(`${error}`)
    }
}

export async function validateCode (userData: ValidateCodeForm) {
    try {
        const { data } = await api.post("/auth/validate-code", userData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const message = error.response.data.error || "Ha ocurrido un error, Inténtelo más tarde";
            throw new Error(message);
        }
        return new Error(`${error}`)
    }
}

export async function resetPassword (userData: ResetPasswordForm, code: number) {
    try {
        const { data } = await api.post(`/auth/reset-password/${code}`, userData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(`${error.response.data.error}`);
        }
        throw new Error(`${error}`)
    }
}