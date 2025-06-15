import { Router } from "express";

// Controller
import { CategoryController } from "../controllers/CategoryController";

// Middleware
import { authenticate } from "../middleware/auth";
import { handleInputErrors } from "../middleware/validation";
import {
    validateCategoryId,
    validateCategoryInput,
    validateIfCategoryExists
} from "../middleware/category";

const router = Router()

// ID for CRUD
router.param("categoryId", validateCategoryId);
router.param("categoryId", validateIfCategoryExists);
router.param("categoryId", authenticate);

// Routes
router.get("/categories",
    authenticate,
    CategoryController.getAll
);

router.get("/categories/search",
    authenticate,
    CategoryController.search
);

router.get("/categories/:categoryId",
    authenticate,
    CategoryController.getById
);

router.post("/categories/new",
    validateCategoryInput,
    handleInputErrors,
    authenticate,
    CategoryController.new
);

router.put("/categories/:categoryId",
    validateCategoryInput,
    handleInputErrors,
    authenticate,
    CategoryController.updateById
);

router.delete("/categories/:categoryId",
    authenticate,
    CategoryController.deleteById
);

export default router;