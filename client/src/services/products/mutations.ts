import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Types
import type { ProductFormType } from "../../lib/types/services/product.type";

// API Calls
import { deleteProduct, newProduct, updateProduct } from "./api";

// New product
export const useNewProductMutation = () => {
    // Query client
    const queryClient = useQueryClient()

    // Redirection
    const redirect = useNavigate()

    return useMutation({
        mutationFn: (data: ProductFormType) => newProduct(data),
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

// Update product
export const useUpdateProductMutation = (id: number) => {
    // Query client
    const queryClient = useQueryClient()

    // Redirection
    const redirect = useNavigate()

    return useMutation({
        mutationFn: (data: ProductFormType) => updateProduct(data, id),
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

// Delete product
export const useDeleteProductMutation = () => {
    // Query client
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: number) => deleteProduct(id),
        onSuccess: (response) => {
            // Sucess toast
            toast.success(response);

            // Refetch products list
            queryClient.refetchQueries({ queryKey: ["products"] })
        },
        onError: (error: Error) => {
            const message = error.message;
            toast.error(message);
        },
    })
}