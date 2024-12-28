// Routing types
import { Request, Response } from "express";

// User model
import User from "../models/User";

// Function to hash password
import { checkPassword, hashPassword } from "../utils/auth";

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

// Login
export const Login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Check if the user with the email sent exists on db
    const user = await User.findOne({ email });
    if(!user) {
        res.status(404).send("El usuario no existe");
        return;
    }

    // Function to check the password
    const isPasswordCorrect = await checkPassword(password, user.password);
    if(!isPasswordCorrect) {
        res.status(401).send("Contraseña incorrecta");
    }

    res.status(200).send("Has iniciado sesión con éxito");
}