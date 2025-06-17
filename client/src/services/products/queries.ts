import { useQuery } from "@tanstack/react-query"

// API Calls
import { getAllProducts } from "./api"

export const useGetAllProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
        retry: 1,
        refetchOnWindowFocus: false
    });
}