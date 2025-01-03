export type Customer = {
    name: string,
    description: string,
    createdAt: Date,
    _id: string
}

export type NewCustomerForm = Pick<Customer, "name" | "description">