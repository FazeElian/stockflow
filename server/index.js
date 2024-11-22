const express = require("express");
const app = express(); // Creation of Express app

// Server port number
const PORT = 5000;

// First route
app.get("/", (req, res) => {
    res.send("This is the index");
});

// Start server
app.listen(PORT, () => {
    console.log("Server running on port:", PORT);
});