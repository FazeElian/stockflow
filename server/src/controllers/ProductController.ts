import { Request, Response } from "express"
import { Op } from "sequelize";

// Model
import Product from "../models/Product"

export class ProductController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const userId = req.user.id;
            const categories = await Product.findAll({
                where: {
                    userId: userId
                },
                order: [["createdAt", "DESC"]]
            });

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
        try {
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
        } catch (error) {
            res.status(500).json({ error: "Error al añadir producto." })
            console.log(error)
        }
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

    static search = async (req: Request, res: Response) => {
        try {
            const userId = req.user.id;
            const productQuery = req.query.name;

            const products = await Product.findAll({
                where: {
                    userId: userId,
                },
                order: [["updatedAt", "DESC"]]
            });

            const searchResult = products.filter(product =>
                product.name.toLowerCase().includes((productQuery as string).trim())
            );

            if (!searchResult  || searchResult.length === 0) {
                const error = new Error(`El producto "${productQuery}}" no existe.`);
                res.status(409).json({ error: error.message });
                return;
            }

            // Return products list
            res.json(searchResult)
        } catch (error) {
            res.status(500).json({ error: "Error al buscar producto." })
        }
    }
}