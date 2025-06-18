import { isAxiosError } from "axios";

// API Axios config
import { api } from "../../config/axios";

// Types
import type { Category } from "../../lib/types/services/category.type";

export async function getAllCategories () {
    try {
        const { data } = await api<Category[]>("/admin/categories");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const message = error.response.data.error;
            throw new Error(message);
        }
        return new Error(`${error}`)
    }
}