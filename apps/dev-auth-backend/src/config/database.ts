import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables handled in main.ts
// dotenv.config();

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;

        if (!mongoURI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        console.log(`🔌 Connecting to MongoDB... (URI: ${mongoURI.substring(0, 15)}...)`);

        await mongoose.connect(mongoURI);

        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error);
        process.exit(1);
    }
};

export default connectDB;
