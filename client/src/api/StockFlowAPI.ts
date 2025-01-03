import { isAxiosError } from "axios";

// Axios config
import api from "../config/axios";

// Type
import { User } from "../types/users";
import { Category } from "../types/categories";
import { Customer } from "../types/customers";

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

export async function getCategories () {
    try {
        const { data } = await api.get<Category[]>("/admin/categories");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getCategory (_id : string) {
    try {
        const { data } = await api.get<Category>(`/admin/categories/${_id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getCustomers () {
    try {
        const { data } = await api.get<Customer[]>("/admin/customers");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getCustomer (_id : string) {
    try {
        const { data } = await api.get<Customer>(`/admin/customers/${_id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }   
}