import { Router } from "express";

// Controller
import { AuthController } from "../controllers/AuthController";

// Middleware
import { authenticate } from "../middleware/auth";

const router = Router()

// Routes
router.post("/register", AuthController.register)
router.post("/login", AuthController.login)
router.post("/confirm-account", AuthController.confirmAccount)
router.post("/forgot-password", AuthController.forgotPassword)
router.post("/validate-code", AuthController.validateToken)
router.post("/reset-password/:token", AuthController.resetPasswordWithToken)
router.get("/user", authenticate, AuthController.getUser)
router.post("/update-password", authenticate, AuthController.updatePassword)

export default router;