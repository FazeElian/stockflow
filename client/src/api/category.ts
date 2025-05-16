import { isAxiosError } from "axios";

// Axios config
import { api } from "../config/axios";

// Types
import { Category, NewCategory } from "../types/category";

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

export async function searchCategory (query: string) {
    try {
        const { data } = await api.get<Category[]>(`/admin/categories/search?name=${encodeURIComponent(query)}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}

export async function getCategoryById (id: number) {
    try {
        const { data } = await api<Category>(`/admin/categories/${id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}

export async function newCategory (categoryData: NewCategory) {
    try {
        const { data } = await api.post("/admin/categories/new", categoryData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}

export async function updateCategory (categoryData: NewCategory, id: number) {
    try {
        const { data } = await api.put(`/admin/categories/${id}`, categoryData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}

export async function deleteCategory (id: number) {
    try {
        const { data } = await api.delete(`/admin/categories/${id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}