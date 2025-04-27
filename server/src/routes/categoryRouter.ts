import { Router } from "express";
import { body } from "express-validator";

// Controller
import { CategoryController } from "../controllers/CategoryController";

// Middleware
import { authenticate } from "../middleware/auth";
import { handleInputErrors } from "../middleware/validation";

const router = Router()

router.param("categoryId", authenticate);

// Routes
router.get("/categories",
    authenticate,
    CategoryController.getAll
);


router.post("/categories/new",
    body("name")
        .notEmpty().withMessage("El nombre de categoría es obligatorio."),
    authenticate,
    handleInputErrors,
    CategoryController.new
);

export default router;