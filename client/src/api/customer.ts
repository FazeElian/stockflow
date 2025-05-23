import { isAxiosError } from "axios";

// Axios config
import { api } from "../config/axios";

// Types
import { Customer, NewCustomer } from "../types/customer";

export async function getAllCustomers () {
    try {
        const { data } = await api.get<Customer[]>("/admin/customers");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}

export async function searchCustomer (query: string) {
    try {
        const { data } = await api.get<Customer[]>(`/admin/customers/search?name=${encodeURIComponent(query)}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}

export async function getCustomerById (id: number) {
    try {
        const { data } = await api<Customer>(`/admin/customers/${id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}

export async function newCustomer (CustomerData: NewCustomer) {
    try {
        const { data } = await api.post("/admin/customers/new", CustomerData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}

export async function updateCustomer (CustomerData: NewCustomer, id: number) {
    try {
        const { data } = await api.put(`/admin/customers/${id}`, CustomerData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}

export async function deleteCustomer (id: number) {
    try {
        const { data } = await api.delete(`/admin/customers/${id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`${error}`)
    }
}