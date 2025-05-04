export type Category = {
    id: number,
    name: string,
    description: string
}

export type NewCategory = Pick<Category, "name" | "description">;
export type UpdateCategory = Pick<Category, "id" | "name" | "description">;