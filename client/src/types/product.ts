export type Product = {
    id: number,
    name: string,
    code: string,
    categoryId: number,
    sellingPrice: number,
    purchaseCost: number,
    description: string,
    inflows: number,
    outflows: number,
    stock: number,
    minimunStock: number,
    state: number,
}

export type NewProduct = Pick<Product,
    "name" |
    "code" |
    "categoryId" |
    "sellingPrice" |
    "purchaseCost" |
    "description" |
    "inflows" | 
    "minimunStock" |
    "state"
>;