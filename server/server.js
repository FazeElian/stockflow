const express = require("express");
const cors = require("cors");

// Modules routes
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Create express app
const app = express();

// Cors
app.use(cors());

// Middleware to analize JSON
app.use(express.json());

// Middleware to analize data (forms)
app.use(express.urlencoded({ extended: true }));

// Backend routes
    // Example
    app.get("/", (req, res) => {
        res.send("Hello World!")
    })

// Users module
app.use("/api/auth/", userRoutes);

// Admin interface
app.use("/api/admin/", adminRoutes);

// Start server
const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
});