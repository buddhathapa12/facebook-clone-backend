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
    res.status(500).json(err);
  }
}

export async function login(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("User not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Wrong Password");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function updateUser(req, res, next) {
  try {
    if (req.body.userId == req.params.id || req.user.isAdmin) {
      console.log("Hello from put request.");
    } else {
      return res.status(403).json("You can update omly your accout.");
    }
  } catch (err) {
    console.log(err);
  }
}
