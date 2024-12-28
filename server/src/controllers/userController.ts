// Routing types
import { Request, Response } from "express";

// User model
import User from "../models/User";

// Function to hash password
import { hashPassword } from "../utils/auth";

// New user
export const Register = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(409).json("El usuario ya está registrado");
        return;
    }

    // New user
    const user = new User(req.body);

    // Passord hashing
    user.password = await hashPassword(password);

    // Save on db
    await user.save();

    res.send("Usuario creado con éxito");
}