import { isAxiosError } from "axios";

// Axios config
import api from "../config/axios";

// Type
import { User } from "../types/users";

export async function getUser () {
    try {
        const { data } = await api<User>("/user");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}