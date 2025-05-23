import { Request, Response } from "express"

// Model
import Customer from "../models/Customer"

export class CustomerController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const userId = req.user.id;
            // console.log(userId)
            const categories = await Customer.findAll({ where: { userId: userId } });

            // Return categories list
            res.json(categories)
        } catch (error) {
            res.status(500).json({ error: "Error al obtener los clientes" })
        }
    }
    
    static getById = async (req: Request, res:  Response) => {
        res.json(req.customer);
    }

    static new = async (req: Request, res: Response) => {
        try {
            const { name, description } = req.body;
            const userId = req.user.id

            // Check if the customer exists
            const existingCustomer = await Customer.findOne({ where: { name, userId } })
    
            if(existingCustomer) {
                const error = new Error("Esta cliente ya existe.");
                res.status(409).json({ error: error.message });
                return;
            }

            // Add the new customer
            const customer = new Customer({
                name,
                description
            })

            // Send the user id & save
            customer.userId = req.user.id;
            await customer.save()

            res.status(200).json("Cliente creado con éxito.")
        } catch (error) {
            res.status(500).json({ error: "Error al crear cliente." })
        }
    }

    static updateById = async (req: Request, res: Response) => {
        // Update changes
        await req.customer.update(req.body);

        res.json("Cliente actualizado con éxito.");
    }

    static deleteById = async (req: Request, res: Response) => {
        // Delete
        await req.customer.destroy()

        res.json("Cliente eliminado con éxito.");
    }

    static search = async (req: Request, res: Response) => {
        try {
            const userId = req.user.id;
            const customerQuery = req.query.name;
            // console.log(customerQuery)

            const categories = await Customer.findAll({
                where: {
                    userId: userId,
                }
            });

            const searchResult = categories.filter(customer =>
                customer.name.toLowerCase().includes((customerQuery as string).trim())
            );

            if (!searchResult  || searchResult.length === 0) {
                const error = new Error(`El cliente "${customerQuery}}" no existe.`);
                res.status(409).json({ error: error.message });
                return;
            }

            // Return categories list
            res.json(searchResult)
        } catch (error) {
            res.status(500).json({ error: "Error al buscar cliente." })
        }
    }
}