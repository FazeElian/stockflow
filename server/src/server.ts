import express from "express";
import router from "./router";
import "dotenv/config";

// Cors
import cors from "cors";

// Config
import { connectDB } from "./config/db";
import { CORSConfig } from "./config/cors";

// Express app
const app = express()

// Cors
app.use(cors(CORSConfig))

// Connection to the database
connectDB()

// Read form data from all app routes
app.use(express.json())

// Router
app.use("/", router);

export default app;