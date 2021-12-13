import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world I am coming fro user's route");
});

//update user
router.put("/:id", updateUser);
//delete user
//get a user
//follow a user
//unfollow user

export default router;
