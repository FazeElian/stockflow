import express from "express";
import router from "./router";

// Express app
const app = express()

// Router
app.use("/", router);

export default app;