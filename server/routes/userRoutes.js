const express = require("express");
const router = express.Router();

// Functions from controller
const { register, login } = require("../controllers/userController");

// Users routes witb its functions
router.post("/register", register);
router.post("/login", login);

module.exports = router;