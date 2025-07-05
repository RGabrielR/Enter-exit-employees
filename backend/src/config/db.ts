// src/config/db.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('🟢 MongoDB connected');
  } catch (error) {
    console.error('🔴 Error connecting to MongoDB:', error);
    process.exit(1);
  }
}
