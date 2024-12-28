import express from "express";
import router from "./router";

// Express app
const app = express()

// Read form data from all app routes
app.use(express.json())

// Router
app.use("/", router);

export default app;