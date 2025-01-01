import { Router } from "express";
import { body } from "express-validator";

// Validation middleware
import { handleInputErrors } from "../middleware/validation";

// Authentication middleware
import { authenticate } from "../middleware/auth";

// Functions from controller
import { NewCategory } from "../controllers/categoryController";

// Router
const categoryRouter = Router();

// New user
categoryRouter.post("/admin/categories/new",
    body("name")
        .notEmpty()
        .withMessage("El nombre de usuario no puede ir vacío"),
    authenticate,
    NewCategory,
    handleInputErrors,
);

export default categoryRouter;