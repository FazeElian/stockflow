export type Product = {
    id: number;
    categoryId: number;
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
>