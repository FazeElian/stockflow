const Category = require("../models/Category");

exports.getAllCategories = async (req, res) => {
    try {
        // User id of the user with the current session
        const categories = await Category.findAll();

        res.json({ categories });
    } catch (error) {
        console.error("Error getting categories: ", error);
        res.status(500).json({ message: "Server error" });
    }
}

exports.newCategory = async (req, res) => {
    try {
        // Get info from form fields
        const { userId, name, description } = req.body;
        
        // Check if the category already exists
        const existingCategory = await Category.findOne({ where: { name } });
        if (existingCategory) {
            return res.status(400).json({ message: "The category is already registered" });
        }
        
        // Create new category
        const category = await Category.create({
            userId,
            name,
            description
        });

        // Successful registration message
        res.status(201).json({ message: "Data received correctly." });
    } catch (error) {
        // Get info from form fields
        console.log("Error creating the category: " + error);
        res.status(500).json({ message: "Server error." });
    }
}