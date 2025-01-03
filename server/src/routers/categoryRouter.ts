import { Router } from "express";
import { body } from "express-validator";

// Validation middleware
import { handleInputErrors } from "../middleware/validation";

// Authentication middleware
import { authenticate } from "../middleware/auth";

// Functions from controller
import {
    NewCategory,
    GetAllCategories,
    UpdateCategory,
    DeleteCategory,
    GetCategory,
} from "../controllers/categoryController";

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
categoryRouter.get("/admin/categories",
    authenticate,
    GetAllCategories
);

// Get category
categoryRouter.get("/admin/categories/:id",
    authenticate,
    GetCategory
)

// Update category
categoryRouter.patch("/admin/categories/edit/:id",
    authenticate,
    UpdateCategory
)

// Delete category
categoryRouter.delete("/admin/categories/delete/:id",
    body("name")
        .notEmpty()
        .withMessage("El nombre de usuario no puede ir vacío"),
    authenticate,
    DeleteCategory,
    handleInputErrors
);

export default categoryRouter;