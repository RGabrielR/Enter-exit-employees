// src/config/db
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('🟢 MongoDB connected');
    }
    catch (error) {
        console.error('🔴 Error connecting to MongoDB:', error);
        process.exit(1);
    }
}
