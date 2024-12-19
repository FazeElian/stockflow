const express = require("express");

// Create express app
const app = express();

// Backend API
app.get("/api", (req, res) => {
    res.json({ "users": ["user 1", "user 2", "user 3"] })
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
});