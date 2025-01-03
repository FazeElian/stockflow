// Types
import { Request, Response } from "express"

// Model
import Category from "../models/Category"

// Create category
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

    res.send(`Categoría creada con éxito: ${category.name}`);
}

// Get all Categories
export const GetAllCategories = async (req: Request, res: Response) => {
    // Get user id
    if (!req.user){
        res.status(401).json({ error: "No autorizado desde categoría" });
        return;
    }
    const userId = req.user._id;

    // Query to db
    const categories = await Category.find({ userId })

    // Send categories to client
    res.status(200).json(categories);
}

// Get category
export const GetCategory = async (req: Request, res: Response) => {
    // Get category id from URL
    const _id = req.params.id;

    const category = await Category.findOne({ _id });

    // Check if the category exists
    if (!category) {
        res.status(404).send("Categoría no encontrada");
        return;
    }

    // Send category data
    res.send(category);
}

// Update category
export const UpdateCategory = async (req: Request, res: Response) => {
    // Get category id from URL
    const _id = req.params.id;

    const category = await Category.findByIdAndUpdate(_id, {
        // Fields to update
        name: req.body.name,
        description: req.body.description
    });

    // Check if the category exists
    if (!category) {
        res.status(404).send("Categoría no encontrada");
        return;
    }

    // Save on db
    await category.save();

    res.send("Categoría actualizada con éxito");
}

// Delete category
export const DeleteCategory = async (req: Request, res: Response) => {
    // Get category id from URL
    const _id = req.params.id;

    // Check if the user is authenticated
    if (!req.user){
        res.status(401).json({ error: "No autorizado desde categoría" });
        return;
    }
    const userId = req.user._id;

    const category = await Category.findOneAndDelete({ _id, userId });
    if (!category) {
        res.status(404).send("Categoría no encontrada");
        return;
    }

    res.status(200).json("Categoría eliminada con éxito");
}