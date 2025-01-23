import mongoose from "mongoose";
import config from "./../config/config.js";
const connectDB = async () => {
  try {
    const Connect = await mongoose.connect(config.mongodb_uri);
    console.log("Mongodb Connected successfully", Connect.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    process.exit(1);
  }
};

export default connectDB;
