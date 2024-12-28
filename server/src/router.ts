import { Router } from "express";
import { body } from "express-validator";

// Validation middleware
import { handleInputErrors } from "./middleware/validation";

// Functions from controller
import { Login, Register, ForgotPassword } from "./controllers/userController";

// Router
const router = Router();

// New user
router.post("/auth/register",
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
router.post("/auth/login",
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
router.post("/auth/forgot-password",
    body("email")
        .isEmail()
        .withMessage("Correo electrónico no válido"),
    handleInputErrors,
    ForgotPassword
);

export default router;