const express = require("express");
const cors = require("cors");
const app = express(); // Creation of Express app

// CORS
app.use(cors());

// First route
app.get("/", (req, res) => {
    res.send("This is the index");
});

// Server port number
const PORT = 5000;

// Start server
app.listen(PORT, () => {
    console.log("Server running on port:", PORT);
});