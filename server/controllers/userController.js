const User = require("../models/User");

// Auth
const jwt = require("jsonwebtoken");

// Environmental variables
require("dotenv").config();

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

exports.login = async (req, res) => {
    try {
        // Get info from form fields
        const { email, password } = req.body;    
        
        // Get user
        const user = await User.findOne({ where: { email } });

        // Check if the user exists
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado." });
        }

        // Password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        if (hashedPassword === user.password) {
            return res.status(401).json({ message: "Credenciales inválidas." +  password });
        }

        // Generar token JWT
        const token = jwt.sign (
            { id: user.id, email: user.email },
            process.env.JWT_SECRET_KEY || "3e1f8f9352c1e5c8a11f48590d08c73d75fdbe07a9fbbc8c56a5f5dd8cb6b2fc", // secret key on environmental variables
            { expiresIn: "1h" } // Token expires in 1h
        );
  
        res.status(200).json({ message: "Logged in successfully", token });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Server error" });
    }
}

exports.getLoggedInUser = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findByPk(userId, {
            attributes: ["id", "name", "email"],
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // User
        res.status(200).json(user);
    } catch (error) {
        console.error("Error getting user:", error);
        res.status(500).json({ message: "Server error" });
    }
}