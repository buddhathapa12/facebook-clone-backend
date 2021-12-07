import mongoose from "mongoose";

const connectDataBase = async () => {
  const db = await mongoose.connect(
    "mongodb://localhost:27017/facebook-clone-backend"
  );
  console.log("Database connected locally");
  return db;
};

export default connectDataBase;
