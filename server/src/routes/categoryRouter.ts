import { Router } from "express";
import { body } from "express-validator";

// Controller
import { CategoryController } from "../controllers/CategoryController";

// Middleware
import { authenticate } from "../middleware/auth";
import { handleInputErrors } from "../middleware/validation";
import {
    hasAccess,
    validateCategoryId,
    validateCategoryInput,
    validateIfCategoryExists
} from "../middleware/category";

const router = Router()

router.param("categoryId", validateCategoryId);
router.param("categoryId", validateIfCategoryExists);
router.param("categoryId", authenticate);
router.param("categoryId", hasAccess);

// Routes
router.get("/categories",
    authenticate,
    CategoryController.getAll
);

router.get("/categories/:categoryId",
    authenticate,
    CategoryController.getById
)

router.post("/categories/new",
    body("name")
        .notEmpty().withMessage("El nombre de categoría es obligatorio."),
    validateCategoryInput,
    handleInputErrors,
    authenticate,
    CategoryController.new
);

export default router;