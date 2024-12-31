import { isAxiosError } from "axios";

// Axios config
import api from "../config/axios";

export async function getUser () {
    // Get token
    const token = localStorage.getItem("AUTH_TOKEN");

    try {
        const { data } = await api("/user", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}