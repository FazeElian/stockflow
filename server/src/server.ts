import express from "express"
import colors from "colors";
import morgan from "morgan"

// Database config
import { db } from "./config/db";

// Router
import authRouter from "./routes/authRouter";

async function connectDB () {
    try {
        await db.authenticate();
        db.sync();
        console.log(colors.blue.bold("Connected to the database sucessfully"));
    } catch (error) {
        console.log(colors.red.bold(`Error while connecting to the database: ${error}`));
    }
}
connectDB();

const app = express()

app.use(morgan("dev"))
app.use(express.json())

// API
app.use("/api/v1/auth/", authRouter);

export default app