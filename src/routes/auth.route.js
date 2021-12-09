import User from "../models/user.model.js";
import express from "express";
import { createUser, login } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);
router.get("/", (req, res) => {
  res.send("Hello world I am coming fro auth's route");
});

export default router;
