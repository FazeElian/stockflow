export type Category = {
    id: number,
    name: string,
    description: string
}

export type NewCategory = Pick<Category, "name" | "description">;