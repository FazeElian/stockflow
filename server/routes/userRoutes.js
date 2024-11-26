const express = require("express");
const router = express.Router();

// Function from controller
const { register, login } = require("../controllers/userController");

// Register new user route
router.post("/register", register);

// Log in route
router.post("/login", login);

module.exports = router;