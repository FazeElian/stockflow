const express = require("express");
const router = express.Router();

// Function from controller
const { register } = require("../controllers/userController");

// Register new user route
router.post("/register", register);

module.exports = router;