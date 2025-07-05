const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");

exports.userRegistration = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ status: false, message: "Email already exists" });
    }
    const hassedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({ name: name, email: email, password: hassedPassword });
    await user.save();
    res.status(201).json({ status: true, message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error in creating user", error });
  }
};

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ status: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ status: false, message: "Invalid email or password" });
    }
    const token = await generateToken(user);
    user.token = token;
    user.save();
     res.status(200).json({ status: true, message: "User logged in successfully" , user});
  } catch (error) {
    res.status(500).json({ status: false, message: "Login failed", error });
  }
};
