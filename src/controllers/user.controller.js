import User from "../models/user.model.js";

export async function getInform(req, res, next) {
  console.log("Mero tauko dukhi sakyo yr");
  //return "Hello world!!!!!"
}

export async function createUser(req, res, next) {
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();

    return res.status(200).json({
      object: "user",
      status: "created",
      newUser,
    });
  } catch (err) {
    console.log(err);
  }
}
