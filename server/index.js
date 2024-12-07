const express = require("express");
const cors = require("cors");
const app = express(); // Creation of Express app
require("dotenv").config(); // For environmental variables

// Auth routes
const authRoutes = require("./routes/userRoutes");

// CORS
app.use(cors());

// Middleware to analize JSON
app.use(express.json());

// Middleware to analize data (forms)
app.use(express.urlencoded({ extended: true }));

// First route
app.get("/", (req, res) => {
    res.send("This is the index");
});

// Routes
app.use("/api/", authRoutes);

// Server port number from .env file
const PORT = process.env.PORT;

// Start server
app.listen(PORT, () => {
    console.log("Server running on port:", PORT);
});