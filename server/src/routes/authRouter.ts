import { Router } from "express";

// Controller
import { AuthController } from "../controllers/AuthController";

const router = Router()

// Routes
router.post("/register", AuthController.register)
router.post("/login", AuthController.login)
router.post("/confirm-account", AuthController.confirmAccount)
router.post("/forgot-password", AuthController.forgotPassword)
router.post("/validate-code", AuthController.validateCode)
router.post("/reset-password", AuthController.resetPasswordWithToken)
router.get("/user", AuthController.getUser)
router.post("/update-password", AuthController.updatePassword)

export default router;