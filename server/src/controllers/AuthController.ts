import { Request, Response } from "express"

// Confirmation mail config
import { AuthEmail } from "../emails/AuthEmail";

// Model
import User from "../models/User";

// Utils for this controller
import { checkPassword, hashPassword } from "../utils/auth";
import { generateJWT } from "../utils/jwt";
import { generateToken } from "../utils/token";

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

        try {
            const user = new User(req.body);
            user.password = await hashPassword(password)
            user.token = generateToken()
            await user.save();

            await AuthEmail.sendConfirmationEmail({
                userName: user.userName,
                email: user.email,
                token: user.token
            })

            res.status(201).json("Has creado tu cuenta con éxito");
        } catch (error) {
            res.status(500).json({ error: "Error creating the user" })
        }
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
        const { token } = req.body;

        const user = await User.findOne({ where: { token } })
        if (!user) {
            const error = new Error("Token no válido");
            res.status(409).json({ error: error.message });
            return;
        }

        user.confirmed = true;
        user.token = null;
        await user.save();

        res.status(200).json("Gracias por verificar tu correo electrónico. Ya puedes iniciar sesión.");
    }

    static forgotPassword = async (req: Request, res: Response) => {
        console.log("Forgot Password function")
    }

    static validateToken = async (req: Request, res: Response) => {
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