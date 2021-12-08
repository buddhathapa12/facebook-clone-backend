import User from "../models/User.model.js";
import express from "express";
const router = express.Router();

router.get("/register", async (req, res) => {
  const user = await new User({
    username: "Buddha",
    email: "buddha@gmail.com",
    password: "12345",
  });
  await user.save();
  res.send("ok");
});

router.get("/", (req, res) => {
  res.send("Hello world I am coming fro auth's route");
});

export default router;
