export type Customer = {
    id: number,
    name: string,
    description: string
}

export type NewCustomer = Pick<Customer, "name" | "description">;
export type UpdateCustomer = Pick<Customer, "id" | "name" | "description">;