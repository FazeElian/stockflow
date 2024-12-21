const express = require("express");
const db = require("./db");

// Create express app
const app = express();

// Backend API
app.get("/api", (req, res) => {
    res.json({ "users": ["user 1", "user 2", "user 3"] })
});

// Get users from database
app.get("/api/users", (req, res) => {
    db.query("SELECT * FROM USERS", (err, users) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching users");
            return;
        }
        res.json({"users": users});
    })
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
});