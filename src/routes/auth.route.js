import User from "../models/user.model.js";
import express from "express";
import { createUser } from "../controllers/user.controller.js";
const router = express.Router();

router.post(
  "/register",
  createUser
  // async (req, res) => {
  //   const user = await new User({
  //     username: "Buddha",
  //     email: "buddha@gmail.com",
  //     password: "12345",
  //   });
  //   await user.save();
  //   res.send("ok");
  // }
);

router.get("/", (req, res) => {
  res.send("Hello world I am coming fro auth's route");
});

export default router;
