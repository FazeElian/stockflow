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

export async function deleteProduct (id: number) {
    try {
        const { data } = await api.delete(`/admin/products/${id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}