import { Router } from "express";
import { body } from "express-validator";

// Validation middleware
import { handleInputErrors } from "../middleware/validation";

// Authentication middleware
import { authenticate } from "../middleware/auth";

// Functions from controller
import {
    Login,
    Register,
    ForgotPassword,
    GetUser
} from "../controllers/userController";

// Router
const userRouter = Router();

// New user
userRouter.post("/auth/register",
    body("userName")
        .notEmpty()
        .withMessage("El nombre de usuario no puede ir vacío"),
    body("email")
        .isEmail()
        .withMessage("Correo electrónico no válido"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("La contraseña debe ser de mínimo 8 caracteres"),
    handleInputErrors,
    Register
);

// Login
userRouter.post("/auth/login",
    body("email")
        .isEmail()
        .withMessage("Correo electrónico no válido"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("La contraseña debe ser de mínimo 8 caracteres"),
    handleInputErrors,
    Login
);

// Forgot password
userRouter.post("/auth/forgot-password",
    body("email")
        .isEmail()
        .withMessage("Correo electrónico no válido"),
    handleInputErrors,
    ForgotPassword
);

// Get user
userRouter.get("/user",
    authenticate,
    GetUser
);

export default userRouter;