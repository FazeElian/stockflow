const express = require("express");
const router = express.Router();

// Function from controller
const { getLoggedInUser } = require("../controllers/userController");
const authenticateToken = require("../middleware/authMiddleware");

router.get("/admin/home", authenticateToken, getLoggedInUser);
router.get("/admin/products", authenticateToken);

module.exports = router;