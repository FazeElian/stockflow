const express = require("express");
const router = express.Router();

// Functions from controller
const {
    newCategory,
    getAllCategories
} = require("../controllers/categoryController");

router.get("/categories", getAllCategories);
router.post("/categories/new", newCategory);

module.exports = router;