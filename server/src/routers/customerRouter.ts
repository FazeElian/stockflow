import { Router } from "express";
import { body } from "express-validator";

// Validation middleware
import { handleInputErrors } from "../middleware/validation";

// Authentication middleware
import { authenticate } from "../middleware/auth";

// Functions from controller
import { NewCustomer, GetAllCustomers } from "../controllers/customerController";

// Router
const customerRouter = Router();

// New customer
customerRouter.post("/admin/customers/new",
    body("name")
        .notEmpty()
        .withMessage("El nombre de usuario no puede ir vacío"),
    authenticate,
    NewCustomer,
    handleInputErrors,
);

// Get all customers
customerRouter.get("/admin/customers", 
    authenticate,
    GetAllCustomers
);

export default customerRouter;