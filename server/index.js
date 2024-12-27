const express = require('express');

// Express app
const app = express()

// Route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});