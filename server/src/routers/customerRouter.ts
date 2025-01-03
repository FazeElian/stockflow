import { Router } from "express";
import { body } from "express-validator";

// Validation middleware
import { handleInputErrors } from "../middleware/validation";

// Authentication middleware
import { authenticate } from "../middleware/auth";

// Functions from controller
import { NewCustomer, GetAllCustomers, GetCustomer, UpdateCustomer, DeleteCustomer } from "../controllers/customerController";

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

// Get customer
customerRouter.get("/admin/customers/:id",
    authenticate,
    GetCustomer
)

// Update customer
customerRouter.patch("/admin/customers/edit/:id",
    body("name")
        .notEmpty()
        .withMessage("El nombre de usuario no puede ir vacío"),
    authenticate,
    UpdateCustomer
)

// Delete customer
customerRouter.delete("/admin/customers/delete/:id",
    authenticate,
    DeleteCustomer,
    handleInputErrors
);

export default customerRouter;