import express from "express";
import router from "./router";
import "dotenv/config";
import { connectDB } from "./config/db";

// Express app
const app = express()

// Connection to the database
connectDB()

// Read form data from all app routes
app.use(express.json())

// Router
app.use("/", router);

export default app;