import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

const router = Router()

router.post("/register",
    body("userName")
        .notEmpty().withMessage("Please enter a username.")
        .isLength({ min: 4 }).withMessage("Username must be at least 4 characters long."),
    body("email")
        .isEmail().withMessage("Please enter a valid email address.")
        .notEmpty().withMessage("Please enter an email address."),
    body("password")
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long.")
        .notEmpty().withMessage("Please enter a password."),
    handleInputErrors,
    AuthController.register
);

router.post("/login")

export default router;