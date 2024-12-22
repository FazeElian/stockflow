const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Category = sequelize.define("Category", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    // Foreign key from Users table => id
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: "Users", // Table name on db
            key: "id",
        },
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Category;