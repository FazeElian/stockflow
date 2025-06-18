import { QueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Types
import type { ProductForm } from "../../lib/types/services/product.type";

// API Calls
import { newProduct } from "./api";

// New product
export const useNewProductMutation = () => {
    // Query client
    const queryClient = new QueryClient()

    // Redirection
    const redirect = useNavigate()

    return useMutation({
        mutationFn: (data: ProductForm) => newProduct(data),
        onSuccess: (response) => {
            // Refetch products list
            queryClient.refetchQueries({ queryKey: ["products"] })

            // Sucess toast
            toast.success(response);

            // Redirect to products view
            redirect("/admin/products")
        },
        onError: (error: Error) => {
            const message = error.message;
            toast.error(message);
        },
    })
}