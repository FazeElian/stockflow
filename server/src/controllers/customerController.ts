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

// Get customer
export const GetCustomer = async (req: Request, res: Response) => {
    // Get customer id from URL
    const _id = req.params.id;

    const customer = await Customer.findOne({ _id });

    // Check if the customer exists
    if (!customer) {
        res.status(404).send("Cliente no encontrado");
        return;
    }

    // Send customer data
    res.send(customer);
}

// Update customer
export const UpdateCustomer = async (req: Request, res: Response) => {
    // Get customer id from URL
    const _id = req.params.id;

    const customer = await Customer.findByIdAndUpdate(_id, {
        // Fields to update
        name: req.body.name,
        description: req.body.description
    });

    // Check if the customer exists
    if (!customer) {
        res.status(404).send("Cliente no encontrado");
        return;
    }

    // Save on db
    await customer.save();

    res.send("Cliente actualizado con éxito");
}

// Delete customer
export const DeleteCustomer = async (req: Request, res: Response) => {
    // Get customer id from URL
    const _id = req.params.id;

    // Check if the user is authenticated
    if (!req.user){
        res.status(401).json({ error: "No autorizado desde cliente" });
        return;
    }
    const userId = req.user._id;

    const customer = await Customer.findOneAndDelete({ _id, userId });
    if (!customer) {
        res.status(404).send("Cliente no encontrado");
        return;
    }

    res.status(200).json("Cliente eliminado con éxito");
}