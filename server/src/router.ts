import { Router } from "express";

// User model
import User from "./models/User";

// Functions from controller
import { Register } from "./controllers/userController";

// Router
const router = Router();

// New user
router.post("/auth/register", Register)

export default router;