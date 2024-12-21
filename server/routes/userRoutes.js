const express = require("express");
const router = express.Router();

// Functions from controller
const { register } = require("../controllers/userController");

// Users routes witb its functions
router.post("/register", register);

module.exports = router;