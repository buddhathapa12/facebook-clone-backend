import mongoose from "mongoose";

const connectDataBase = async () => {
  const db = await mongoose.connect(
    "mongodb://localhost:27017/facebookCloneBackend"
  );
  console.log("Database connected locally");
  return db;
};

export default connectDataBase;
