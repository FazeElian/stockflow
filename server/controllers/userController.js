const User = require("../models/User");

// For data hashing
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    try {
        // Get info from form fields
        const { name, email, password } = req.body;
    
        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "The user is already registered" });
        }

        // Password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({ name, email, password: hashedPassword });

        // Successful registration message
        res.status(201).json({ message: "Data received correctly." });
    } catch (error) {
        console.log("Error creating the user:  " + error);
        res.status(500).json({ message: "Server error." });
    }
};