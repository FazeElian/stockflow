export type Product = {
    id: number,
    categoryId: number,
    name: string,
    price: number,
    image: string,
    inflows: number,
    outflows: number,
    description: string
}

export type NewProduct = Pick<Product,
    "name" |
    "categoryId" |
    "price" |
    "image" |
    "inflows" |
    "description"
>;