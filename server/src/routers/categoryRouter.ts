import { Router } from "express";
import { body } from "express-validator";

// Validation middleware
import { handleInputErrors } from "../middleware/validation";

// Authentication middleware
import { authenticate } from "../middleware/auth";

// Functions from controller

// Router
const categoryRouter = Router();

// New user
categoryRouter.post("/categories/new",
    body("name")
        .notEmpty()
        .withMessage("El nombre de usuario no puede ir vacío"),
    handleInputErrors,
);

export default categoryRouter;