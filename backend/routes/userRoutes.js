import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// ------------------------------
// USER REGISTRATION
// ------------------------------
router.post("/register", async (req, res) => {
  try {
    const { name, email, age, password } = req.body;

    if (!name || !email || !password)
      return res.json({ success: false, message: "All fields are required" });

    // Check if email already exists
    const existing = await User.findOne({ email });
    if (existing)
      return res.json({ success: false, message: "Email already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      age,
      password: hashedPassword
    });

    return res.json({
      success: true,
      message: "User registered successfully",
      user
    });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});


// ------------------------------
// USER LOGIN
// ------------------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.json({ success: false, message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.json({ success: false, message: "Invalid password" });

    const token = jwt.sign({ id: user._id }, "SECRET123");

    return res.json({
      success: true,
      message: "Login successful",
      token,
      user
    });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});


// ------------------------------
// GET LOGGED USER DETAILS
// ------------------------------
router.get("/me", async (req, res) => {
  try {
    const token = req.headers.token;

    if (!token)
      return res.json({ success: false, message: "No token provided" });

    const decoded = jwt.verify(token, "SECRET123");
    const user = await User.findById(decoded.id);

    res.json({ success: true, user });

  } catch (error) {
    res.json({ success: false, message: "Invalid token" });
  }
});

export default router;
