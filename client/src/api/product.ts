import { isAxiosError } from "axios";

// Axios config
import api from "../config/axios";

// Types
import { Product } from "../types/product";

export async function getAllProducts () {
    try {
        const { data } = await api.get<Product[]>("/admin/products");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}
