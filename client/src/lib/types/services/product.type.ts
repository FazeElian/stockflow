import type { UseMutationResult } from "@tanstack/react-query";

export type Product = {
    id: number;
    categoryId?: number | null;
    name: string;
    code: string;
    sellingPrice: number;
    purchaseCost: number;
    inflows: number;
    outflows: number;
    stock: number;
    minimumStock: number;
    status: string;
    description: string;
};

export type ProductRowType = Pick<Product,
    "id" |
    "name" |
    "code" |
    "sellingPrice" | 
    "outflows" |
    "stock" |
    "status"
>;

export type ProductFormType = Pick<Product,
    "name" |
    "code" |
    "categoryId" |
    "description" |
    "sellingPrice" |
    "purchaseCost" |
    "inflows" |
    "minimumStock" |
    "status"
>;

export type ProductFormPropsType = {
    initialValues: ProductFormType;
    useMutation: () => UseMutationResult<Product, unknown, ProductFormType, unknown>;
}