import { isAxiosError } from "axios";

// Axios config
import { api } from "../config/axios";
import { apiFileData } from "../config/axios";

// Types
import { NewProduct, Product } from "../types/product";

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

export async function newProduct (productData: NewProduct) {
    try {
        const { data } = await apiFileData.post("/admin/products/new", productData);
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