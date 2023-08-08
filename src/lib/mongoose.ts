import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("No MongoDB URL provided");
  if (isConnected) console.log("Already connected to database");

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;

    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};
