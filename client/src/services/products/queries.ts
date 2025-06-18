import { useQuery } from "@tanstack/react-query"

// API Calls
import { getAllProducts, getProductById } from "./api"

export const useGetAllProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
        retry: 2,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        staleTime: 60000
    });
}

export const useGetProductById = (id: number) => {
    return useQuery({
        queryKey: ["product", id!],
        queryFn: () => getProductById(id),
        refetchOnWindowFocus: false,
        enabled: !!id
    });
}