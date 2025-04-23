import { Request, Response } from "express"

// Model
import User from "../models/User";

// Utils for this controller
import { checkPassword, hashPassword } from "../utils/auth";
import { generateJWT } from "../utils/jwt";

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
        const { email, password } = req.body;

        // Check if the user already exists
        const user = await User.findOne({ where: { email } });

        if(!user) {
            const error = new Error("No pudimos encontrar una cuenta con los datos proporcionados. Por favor, compruébelo y vuelva a intentarlo.");
            res.status(404).json({ error: error.message });
            return;
        }

        // Check if the account has been confirmed
        if (!user.confirmed) {
            const error = new Error("Tu cuenta aún no ha sido verificada. Revisa tu correo electrónico para confirmarla.");
            res.status(403).json({ error: error.message });
            return;
        }

        const isPasswordCorrect = await checkPassword(password, user.password);
        if(!isPasswordCorrect) {
            const error = new Error("Por favor verifique su contraseña y vuelva a intentarlo.");
            res.status(401).json({ error: error.message });
            return;
        }

        const token = generateJWT(user.id)

        // res.status(200).json("You have logged in successfully.");
        res.send(token);
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