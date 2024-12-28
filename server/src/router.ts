import { Router } from "express";

// User model
import User from "./models/User";

// Functions from controller
import { Login, Register } from "./controllers/userController";

// Router
const router = Router();

// New user
router.post("/auth/register", Register);

// Login
router.post("/auth/login", Login);

export default router;