import express from "express";
import JobSeeker from "../models/JobSeeker.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// LOGIN API
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await JobSeeker.findOne({ email });
        if (!user) return res.json({ success: false, message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.json({ success: false, message: "Wrong password" });

        const token = jwt.sign({ id: user._id }, "SECRET123");

        res.json({
            success: true,
            token,
            user
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
});

export default router;
