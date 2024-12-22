const express = require("express");
const authToken = require("../middleware/authMiddleware");
const router = express.Router();

// Protected routes
router.get("/login", authToken, (req, res) => {
    res.status(200).json({ message: "Acceso concedido.", user: req.user });
});

module.exports = router;