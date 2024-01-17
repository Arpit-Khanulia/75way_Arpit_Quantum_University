import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config();

//connection

async function connectToDatabase() {
    try {
      await mongoose.connect(''+ process.env.DB_CONNECT);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

export {connectToDatabase};