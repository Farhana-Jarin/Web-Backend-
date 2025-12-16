import mongoose from "mongoose";

// mongoose.connect(process.env.MONGO_URI).then().catch();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successful");
  } catch (error) {
    console.log("Database is not connected. Something went wrong!");
  }
};
