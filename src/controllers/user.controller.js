import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export async function getInform(req, res, next) {
  console.log("Mero tauko dukhi sakyo yr");
  //return "Hello world!!!!!"
}

export async function createUser(req, res, next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();

    return res.status(200).json({
      object: "user",
      status: "created",
      newUser,
    });
  } catch (err) {
    console.log("Hello", err);
  }
}
