import { useQuery } from "@tanstack/react-query"

// API Calls
import { getAllCategories } from "./api"

export const useGetAllCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
        retry: 1,
        refetchOnWindowFocus: false
    });
}