import { isAxiosError } from "axios";

// Axios config
import api from "../config/axios";

// Types
import { Category } from "../types/category";

export async function getAllCategories () {
    try {
        const { data } = await api.get<Category[]>("/admin/categories");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}