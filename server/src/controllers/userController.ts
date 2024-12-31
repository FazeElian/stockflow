// Routing types
import { Request, Response } from "express";

// User model
import User from "../models/User";

// Function to hash password
import { checkPassword, hashPassword } from "../utils/auth";

// Generate json web token function
import { generateJWT } from "../utils/jwt";

// JWT
import jwt from 'jsonwebtoken';

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

    // Generate JWT function
    const token = generateJWT({id: user._id});

    res.status(200).send("Has iniciado sesión con éxito");
}

// Forgot password
export const ForgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body;

    // Check if exists an user with the email sent
    const user = await User.findOne({ email });
    if(!user) {
        res.status(404).send("No existe una cuenta asociada al correo ingresado");
    }

    // Success message
    res.status(200).send("Código enviado al correo para reestablecer contraseña");
}

export const GetUser = async (req: Request, res: Response) => {
    const bearer = req.headers.authorization;

    // Check if there's a bearer
    if(!bearer) {
        const error = new Error("No autorizado");
        res.status(401).json({ error: error.message });
        return;
    }

    // Show only the JWT without "bearer on console"
    const [, token] = bearer.split(" ");

    // Check if there's a token
    if(!token) {
        const error = new Error("No autorizado");
        res.status(401).json({ error: error.message });
        return;
    }

    try {
        const result = jwt.verify(token, process.env.JWT_SECRET);
        if(typeof result === "object" && result.id) {
            const user = await User.findById(result.id).select("userName email") // Select user fields
            if(!user) {
                const error = new Error("El usuario no existe");
                res.status(401).json({ error: error.message });
                return;
            }
            res.json(user);
        }
    } catch (error) {
        res.status(500).send({ error: "Token no válido" })
    }
}