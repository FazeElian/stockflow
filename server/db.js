const mysql = require("mysql")

// Environmental variables
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "stockflow"
});

module.exports = db;

// Connection to database
db.connect((err) => {
    if (err) {
      console.error("Error connecting to database: ", err);
      return;
    }
    console.log("Connected to database!");
});