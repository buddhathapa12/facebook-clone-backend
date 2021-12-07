import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world I am coming fro user's route");
});

export default router;
