import { Router } from "express";

const router = Router();

// Routes
router.get("/", (req, res) => {
    res.send("Home page");
});

export default router;