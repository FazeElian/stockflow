import { Request, Response } from "express"

// Model
import Category from "../models/Category"

export class CategoryController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const userId = req.user.id;
            const categories = await Category.findAll({
                where: {
                    userId: userId
                },
                order: [["createdAt", "DESC"]]
            });

            // Return categories list
            res.json(categories)
        } catch (error) {
            res.status(500).json({ error: "Error al obtener las categorías" })
        }
    }

    static getById = async (req: Request, res:  Response) => {
        res.json(req.category);
    }

    static new = async (req: Request, res: Response) => {
        try {
            const { name } = req.body;
            const userId = req.user.id

            // Check if the category exists
            const existingCategory = await Category.findOne({ where: { name, userId } })
    
            if(existingCategory) {
                const error = new Error("Esta categoría ya existe.");
                res.status(409).json({ error: error.message });
                return;
            }

            // Add the new category
            const category = new Category(req.body)

            // Send the user id & save
            category.userId = req.user.id;
            await category.save()

            res.status(200).json("Categoría creada con éxito.")
        } catch (error) {
            res.status(500).json({ error: "Error al crear categoría." })
        }
    }

    static updateById = async (req: Request, res: Response) => {
        // Update changes
        await req.category.update(req.body);

        res.json("Categoría actualizada con éxito.");
    }

    static deleteById = async (req: Request, res: Response) => {
        // Delete
        await req.category.destroy()

        res.json("Categoría eliminada con éxito.");
    }

    static search = async (req: Request, res: Response) => {
        try {
            const userId = req.user.id;
            const categoryQuery = req.query.name;

            const categories = await Category.findAll({
                where: {
                    userId: userId,
                },
                order: [["updatedAt", "DESC"]]
            });

            const searchResult = categories.filter(category =>
                category.name.toLowerCase().includes((categoryQuery as string).trim())
            );

            if (!searchResult  || searchResult.length === 0) {
                const error = new Error(`La categoría "${categoryQuery}}" no existe.`);
                res.status(409).json({ error: error.message });
                return;
            }

            // Return categories list
            res.json(searchResult)
        } catch (error) {
            res.status(500).json({ error: "Error al buscar categoría." })
        }
    }
}