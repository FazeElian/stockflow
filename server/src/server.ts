import express from "express"
import colors from "colors";
import morgan from "morgan"
import cors from "cors";

// CORS Config
import { CORSConfig } from "./config/cors";

// Database config
import { db } from "./config/db";

// Routers
import authRouter from "./routes/authRouter";
import categoryRouter from "./routes/categoryRouter";
import productRouter from "./routes/productRouter";

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

app.use(cors(CORSConfig))

app.use(morgan("dev"))
app.use(express.json())

// API
app.use("/api/v1/auth/", authRouter);
app.use("/api/v1/admin/",
    categoryRouter,
    productRouter
);

export default app