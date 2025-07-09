// config/db.js
import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
    try {
        console.log("MONGO_URI:", ENV_VARS.MONGO_URI);  // Checking if the URI is loaded correctly
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI); // No options needed
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit with failure
    }
};
