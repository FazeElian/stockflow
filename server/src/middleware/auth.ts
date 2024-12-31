// Types
import { NextFunction, Request, Response } from 'express';

// Model
import User, { IUser } from '../models/User';

// JWT
import jwt from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            user?: IUser
        }
    }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
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
            const user = await User.findById(result.id).select("-password") // Select all except password
            if(!user) {
                const error = new Error("El usuario no existe");
                res.status(401).json({ error: error.message });
                return;
            }
            req.user = user;
            next()
        }
    } catch (error) {
        res.status(500).send({ error: "Token no válido" })
    }
}