// Types
import { Request, Response } from "express"

// Model
import Category from "../models/Category"

export const NewCategory = async (req: Request, res: Response) => {
    const { name, description } = req.body;

    if (!req.user){
        res.status(401).json({ error: "No autorizado desde categoría" });
        return;
    }
    const userId = req.user._id;

    // Check if the category already exists
    const existingCategory = await Category.findOne({ name, userId });
    if (existingCategory) {
        res.status(409).json("La categoría ya está registrada");
        return;
    }

    // New category
    const category = new Category({ userId, name, description }); // Attributes

    // Save on db
    await category.save();

    res.send("Categoría creada con éxito");
    console.log("Categoría creada con éxito");
}