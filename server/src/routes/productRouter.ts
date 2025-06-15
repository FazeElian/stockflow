import { Router } from "express";

// Controller
import { ProductController } from "../controllers/ProductController";

// Middleware
import { authenticate } from "../middleware/auth";
import { handleInputErrors } from "../middleware/validation";

import {
    hasAccess,
    validateProductId,
    validateProductInput,
    validateIfProductExists
} from "../middleware/product";

const router = Router()

router.param("productId", validateProductId);
router.param("productId", validateIfProductExists);
router.param("productId", authenticate);
// router.param("productId", hasAccess);

// Routes
router.get("/products",
    authenticate,
    ProductController.getAll
);

router.get("/products/search",
    authenticate,
    ProductController.search
);

router.get("/products/:productId",
    authenticate,
    ProductController.getById
);

router.post("/products/new",
    validateProductInput,
    handleInputErrors,
    authenticate,
    ProductController.new
);

router.put("/products/:productId",
    validateProductInput,
    handleInputErrors,
    authenticate,
    ProductController.updateById
);

router.delete("/products/:productId",
    authenticate,
    ProductController.deleteById
);

export default router;