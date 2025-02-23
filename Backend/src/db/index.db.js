import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";  

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`); 
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection Failed", error);
        process.exit(1);
    }
};

export default connectDB;
