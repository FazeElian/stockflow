import { isAxiosError } from "axios";

// Axios config
import api from "../config/axios";

export async function getUser () {
    try {
        const { data } = await api("/user");
        console.log(data);
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}