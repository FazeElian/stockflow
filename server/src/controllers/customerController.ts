// Types
import { Request, Response } from "express"

// Model
import Customer from "../models/Customer"

// Create Customer
export const NewCustomer = async (req: Request, res: Response) => {
    const { name, description } = req.body;

    if (!req.user){
        res.status(401).json({ error: "No autorizado desde cliente" });
        return;
    }
    const userId = req.user._id;

    // Check if the Customer already exists
    const existingCustomer = await Customer.findOne({ name, userId });
    if (existingCustomer) {
        res.status(409).json("El cliente ya está registrado");
        return;
    }

    // New Customer
    const customer = new Customer({ userId, name, description }); // Attributes

    // Save on db
    await customer.save();

    res.send(`Cliente registrado con éxito: ${customer.name}`);
}

// Get all customers
export const GetAllCustomers = async (req: Request, res: Response) => {
    // Get user id
    if (!req.user){
        res.status(401).json({ error: "No autorizado desde cliente" });
        return;
    }
    const userId = req.user._id;

    // Query to db
    const customers = await Customer.find({ userId })

    // Send customers to client
    res.status(200).json(customers);   
}