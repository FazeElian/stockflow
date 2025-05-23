import { Request, Response } from "express"
import formidable from "formidable";
import { v4 as uuid } from "uuid";
import { Op } from "sequelize";

// Model
import Product from "../models/Product"

// Cloudinary config
import cloudinary from "../config/cloudinary";

export class ProductController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const userId = req.user.id;
            // console.log(userId)
            const categories = await Product.findAll({ where: { userId: userId } });

            // Return categories list
            res.json(categories)
        } catch (error) {
            res.status(500).json({ error: "Error al obtener los productos." })
        }
    }

    static getById = async (req: Request, res: Response) => {
        res.json(req.product);
    }

    static new = async (req: Request, res: Response) => {
        const { name, code } = req.body;
        const userId = req.user.id

        // Check if the Product exists
        const existingProduct = await Product.findOne({
            where: {
                userId: userId,
                [Op.or]: [
                    { name: name },
                    { code: code }
                ]
            }
        })

        if(existingProduct) {
            const error = new Error("Este producto ya existe.");
            res.status(409).json({ error: error.message });
            return;
        }

        // Add the new Product
        const product = new Product(req.body)

        // Send the user id & save
        product.userId = req.user.id;
        await product.save()

        res.status(200).json("Producto creado con éxito.")
    }

    static updateById = async (req: Request, res: Response) => {
        // Update changes
        await req.product.update(req.body);

        res.json("Producto actualizado con éxito.");
    }

    static deleteById = async (req: Request, res: Response) => {
        // Delete
        await req.product.destroy()

        res.json("Producto eliminado con éxito.");
    }
}