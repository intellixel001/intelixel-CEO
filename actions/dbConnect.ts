'use server'
import mongoose from "mongoose";

// Define connection state type
type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  // Skip if already connected
  if (connection.isConnected) {
    console.log("Database is already connected");
    return;
  }

  try {
    // Connect to MongoDB
    const db = await mongoose.connect(process.env.MONGODB_URI || "");
    connection.isConnected = db.connection.readyState;
    console.log("Database connected");
    // console.log("_readyState : ",db.connection._readyState )
    // console.log("readyState : ", db.connection.readyState)
  } catch (error) {
    // Exit if connection fails
    console.log("Error connecting to MongoDB : ", error);
    process.exit(1);
  }
}

export default dbConnect;
