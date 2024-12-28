import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI);
        const url = `${connection.host}:${connection.port}`;

        console.log("Mongo DB connected on:", url);
    } catch (error) {
        console.log("Error connecting to the database:", error);
        process.exit(1);
    }
}