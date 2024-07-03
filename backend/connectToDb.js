import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("connect to db");
  } catch (error) {
    console.log("error to connect db");
  }
};

export default connectToDb;
