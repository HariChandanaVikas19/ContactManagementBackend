const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
//@ desc Register the user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    console.log(res.message);
    throw new Error("User already existed");
    // console.log(res.message);
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log("User created successfully", user);
  if (user) {
    res.status(200);
    res.send({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    res.send("user data is invalid");
  }
});
//@ desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = await jsonwebtoken.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        password: user.password,
      },
      process.env.SECRET_ACCESS_TOKEN,
      { expiresIn: "15m" },
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    res.send("email or password are invalid");
  }
});
//@ desc Current user info
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  console.log(req.user);
  res.json(req.user);
});
module.exports = { registerUser, loginUser, currentUser };
