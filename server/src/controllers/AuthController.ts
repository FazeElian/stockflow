import { Request, Response } from "express"

// Confirmation mail config
import { AuthEmail } from "../emails/AuthEmail";

// Model
import User from "../models/User";

// Utils for this controller
import { checkPassword, hashPassword } from "../utils/auth";
import { generateJWT } from "../utils/jwt";
import { generateCode } from "../utils/code";

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
            user.code = generateCode()
            await user.save();

            await AuthEmail.sendConfirmationEmail({
                userName: user.userName,
                email: user.email,
                code: user.code
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

        // Check if password entered is correct
        const isPasswordCorrect = await checkPassword(password, user.password);
        if(!isPasswordCorrect) {
            const error = new Error("Por favor verifique su contraseña y vuelva a intentarlo.");
            res.status(401).json({ error: error.message });
            return;
        }

        const code = generateJWT(user.id)
        res.send(code); // Send code to client
    }

    static confirmAccount = async (req: Request, res: Response) => {
        const { code } = req.body;

        const user = await User.findOne({ where: { code } })
        if (!user) {
            const error = new Error("Código no válido");
            res.status(409).json({ error: error.message });
            return;
        }

        user.confirmed = true;
        user.code = null;
        await user.save();

        res.status(200).json("Gracias por verificar tu correo electrónico. Ya puedes iniciar sesión.");
    }

    static forgotPassword = async (req: Request, res: Response) => {
        const { email } = req.body;

        // Check if the user already exists
        const user = await User.findOne({ where: { email } });

        if(!user) {
            const error = new Error("No encontramos ninguna cuenta asociada a la dirección de correo electrónico que ingresaste. Por favor, compruébalo y vuelve a intentarlo.");
            res.status(404).json({ error: error.message });
            return;
        }

        user.code = generateCode();
        await user.save();
        await AuthEmail.sendForgotPasswordEmail({
            email: user.email,
            userName: user.userName,
            code: user.code
        });

        res.status(200).json("¡Listo! Te enviamos un correo electrónico para restablecer tu contraseña. Revisa tu bandeja de entrada y sigue los pasos para restablecerla.")
    }

    static validateCode = async (req: Request, res: Response) => {
        const { code } = req.body;

        // Check if the code exists
        const existingCode = await User.findOne({ where: { code } });
        if(!existingCode) {
            const error = new Error("Código no válido");
            res.status(404).json({ error: error.message });
            return;
        }

        res.status(200).json("El código se verificó correctamente. Ya puedes configurar tu nueva contraseña.");
    }

    static resetPasswordWithCode = async (req: Request, res: Response) => {
        const { code } = req.params;
        const { password } = req.body;

        // Check if the code exists
        const user = await User.findOne({ where: { code } });
        if(!user) {
            const error = new Error("Código no válido");
            res.status(404).json({ error: error.message });
            return;
        }

        // New password
        user.password = await hashPassword(password);
        user.code = null;

        await user.save();

        res.status(200).json("Tu contraseña se ha restablecido correctamente. Ya puedes iniciar sesión con tu nueva contraseña.");
    }

    static getUser = async (req: Request, res: Response) => {
        res.json(req.user);
    }

    static updatePassword = async (req: Request, res: Response) => {
        const { currentPassword, newPassword } = req.body;
        const { id } = req.user;

        // Find user
        const user = await User.findByPk(id);

        const isPasswordCorrect = await checkPassword(currentPassword, user.password);
        if (!isPasswordCorrect) {
            const error = new Error("La contraseña que ingresaste es incorrecta");
            res.status(401).json({ error: error.message });
            return;
        }

        user.password = await hashPassword(newPassword)
        await user.save();

        res.status(200).json("Contraseña actualizada con éxito");
    }
}