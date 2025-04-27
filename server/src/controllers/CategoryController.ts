import { Request, Response } from "express"

// Model
import Category from "../models/Category"

declare global {
    namespace Express {
        interface Request {
            category: Category
        }
    }
}

export class CategoryController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const userId = req.user.id;
            console.log(userId)
            const categories = await Category.findAll({ where: { userId: userId } });

            // Return categories list
            res.json(categories)
        } catch (error) {
            res.status(500).json({ error: "Error al obtener las categorías" })
        }
    }

    static new = async (req: Request, res: Response) => {
        try {
            const { name, description } = req.body;

            // Check if the category exists
            const existingCategory = await Category.findOne({ where: { name } })
    
            if(existingCategory) {
                const error = new Error("Esta categoría ya existe.");
                res.status(409).json({ error: error.message });
                return;
            }

            // Add the new category
            const category = new Category({
                name,
                description
            })

            // Send the user id & save
            category.userId = req.user.id;
            await category.save()

            res.status(200).json("Categoría creada con éxito.")
        } catch (error) {
            res.status(500).json({ error: "Error al crear categoría." })
        }
    }
}