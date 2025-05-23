import { Router } from "express";

// Controller
import { CustomerController } from "../controllers/CustomerController";

// Middleware
import { authenticate } from "../middleware/auth";
import { handleInputErrors } from "../middleware/validation";
import {
    hasAccess,
    validateCustomerId,
    validateCustomerInput,
    validateIfCustomerExists
} from "../middleware/customer";

const router = Router()

router.param("customerId", validateCustomerId);
router.param("customerId", validateIfCustomerExists);
router.param("customerId", authenticate);
router.param("customerId", hasAccess);

// Routes
router.get("/customers",
    authenticate,
    CustomerController.getAll
);

router.get("/customers/search",
    authenticate,
    CustomerController.search
);

router.get("/customers/:customerId",
    authenticate,
    CustomerController.getById
)

router.post("/customers/new",
    validateCustomerInput,
    handleInputErrors,
    authenticate,
    CustomerController.new
);

router.put("/customers/:customerId",
    validateCustomerInput,
    handleInputErrors,
    authenticate,
    CustomerController.updateById
);

router.delete("/customers/:customerId",
    authenticate,
    CustomerController.deleteById
);

export default router;