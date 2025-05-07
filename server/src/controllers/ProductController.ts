import { Request, Response } from "express"
import formidable from "formidable";
import { v4 as uuid } from "uuid";

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
        const form = formidable({
            multiples: false
        })

        try {
            form.parse(req, (err, fields, files) => {
                const imageUploaded = files.image

                cloudinary.uploader.upload(imageUploaded[0].filepath, { public_id: uuid() }, async function (error, result) {
                    if (error) {
                        const error = new Error("Error al cargar la imagen.")
                        return res.status(500).json({ error: error.message })
                    }

                    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
                    const categoryId = Array.isArray(fields.categoryId) ? fields.categoryId[0] : fields.categoryId;
                    const price = Array.isArray(fields.price) ? fields.price[0] : fields.price;
                    const inflows = Array.isArray(fields.inflows) ? fields.inflows[0] : fields.inflows;
                    const description = Array.isArray(fields.description) ? fields.description[0] : fields.description;

                    if (result) {
                        const imageParsed = result.secure_url
                        // res.json({ image: imageParsed })
                        console.log(imageParsed)

                        const product = new Product({
                            name: name,
                            categoryId: categoryId,
                            price: price,
                            inflows: inflows,
                            description: description,
                            image: imageParsed
                        });

                        // Send the user id & save
                        product.userId = req.user.id;
                        await product.save()

                        res.status(200).json("Producto creado con éxito.")
                    }
                })
            })
        } catch (error) {
            res.status(500).json({ error: "Error al crear producto." })
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
}