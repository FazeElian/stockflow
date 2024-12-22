const express = require("express");
const authToken = require("../middleware/authMiddleware");
const router = express.Router();

// Function from controller
const { getLoggedInUser } = require("../controllers/userController");

router.get("/admin/home", authToken, getLoggedInUser);
router.get("/admin/product", authToken);

module.exports = router;