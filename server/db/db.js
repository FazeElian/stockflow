const { Sequelize } = require("sequelize");

const sequelize = new Sequelize ("stockflow", "root", "123", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.log("Error connecting to the database:", err));

module.exports = sequelize;