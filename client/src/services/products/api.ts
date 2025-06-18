import { isAxiosError } from "axios";

// API Axios config
import { api } from "../../config/axios";

// Types
import type { Product, ProductFormType } from "../../lib/types/services/product.type";

export async function getAllProducts () {
    try {
        const { data } = await api<Product[]>("/admin/products");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const message = error.response.data.error;
            throw new Error(message);
        }
        return new Error(`${error}`)
    }
}

export async function getProductById (id: number) {
    try {
        const { data } = await api<Product>(`/admin/products/${id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const message = error.response.data.error;
            throw new Error(message);
        }
        return new Error(`${error}`)
    }
}

export async function newProduct (productData: ProductFormType) {
    try {
        const { data } = await api.post("/admin/products/new", productData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const message = error.response.data.error;
            throw new Error(message);
        }
        return new Error(`${error}`)
    }
}

export async function updateProduct (productData: ProductFormType, id: number) {
    try {
        const { data } = await api.put(`/admin/products/${id}`, productData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const message = error.response.data.error;
            throw new Error(message);
        }
        return new Error(`${error}`)
    }
}

export async function deleteProduct (id: number) {
    try {
        const { data } = await api.delete(`/admin/products/${id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const message = error.response.data.error;
            throw new Error(message);
        }
        return new Error(`${error}`)
    }
}