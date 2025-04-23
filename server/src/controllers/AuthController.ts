import { Request, Response } from "express"

// Model
import User from "../models/User";

// Utils for this controller
import { hashPassword } from "../utils/auth";

export class AuthController {
    static register = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });

        if(existingUser) {
            const error = new Error("Este correo electrónico ya está asociado a otra cuenta.");
            res.status(409).json({ error: error.message });
            return;
        }       

        // Create new user
        const user = new User(req.body);

        // Hash password (for security)
        user.password = await hashPassword(password)

        // Save
        await user.save();
    }

    static login = async (req: Request, res: Response) => {
        console.log("Login function")
    }

    static confirmAccount = async (req: Request, res: Response) => {
        console.log("Confirm Account function")
    }

    static forgotPassword = async (req: Request, res: Response) => {
        console.log("Forgot Password function")
    }

    static validateCode = async (req: Request, res: Response) => {
        console.log("Validate Code function")
    }

    static resetPasswordWithToken = async (req: Request, res: Response) => {
        console.log("resetPasswordWithToken function")
    }

    static getUser = async (req: Request, res: Response) => {
        console.log("Get User function")
    }

    static updatePassword = async (req: Request, res: Response) => {
        console.log("Update Password function")
    }
}