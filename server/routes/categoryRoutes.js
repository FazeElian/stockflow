const express = require("express");
const router = express.Router();

const { newCategory } = require("../controllers/categoryController");

router.get("/categories");
router.post("/categories/new", newCategory);

module.exports = router;