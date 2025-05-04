import { isAxiosError } from "axios";

// Axios config
import api from "../config/axios";

// Types
import { RegisterForm } from "../types/auth";

export async function createAccount (userData: RegisterForm) {
    try {
        const { data } = await api.post("/auth/register", userData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`Error getting story. ${error}`)
    }
}