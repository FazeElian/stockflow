import { Router } from "express";
import { body } from "express-validator";

// Validation middleware
import { handleInputErrors } from "../middleware/validation";

// Authentication middleware
import { authenticate } from "../middleware/auth";

// Functions from controller
import { GetAllCategories, NewCategory } from "../controllers/categoryController";

// Router
const categoryRouter = Router();

// New category
categoryRouter.post("/admin/categories/new",
    body("name")
        .notEmpty()
        .withMessage("El nombre de usuario no puede ir vacío"),
    authenticate,
    NewCategory,
    handleInputErrors,
);

// Get all categories
categoryRouter.get("/admiN/categories",
    authenticate,
    GetAllCategories
);

export default categoryRouter;