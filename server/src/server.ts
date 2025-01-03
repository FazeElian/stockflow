import express from "express";
import "dotenv/config";

// Routers:
import userRouter from "./routers/userRouter";
import categoryRouter from "./routers/categoryRouter";
import customerRouter from "./routers/customerRouter";

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

// Routers
app.use("/api", userRouter, categoryRouter, customerRouter);

export default app;