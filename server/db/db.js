const { Sequelize } = require("sequelize");
require("dotenv").config(); // For environmental variables

// Environmental variables
const host = process.env.DB_HOST;
const db_dialect = process.env.DB_DIALECT;
const db = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize (db, user, password, {
    host: host,
    dialect: db_dialect
});

sequelize.authenticate()
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.log("Error connecting to the database:", err));

module.exports = sequelize;