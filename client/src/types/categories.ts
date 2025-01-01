export type Category = {
    name: string,
    description: string,
    createdAt: Date,
    _id: string
}

export type NewCategoryForm = Pick<Category, "name" | "description">