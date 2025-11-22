import express from "express";
import JobSeeker from "../models/JobSeeker.js";

const router = express.Router();

// @route   POST /api/jobseeker/register
// @desc    Register a new job seeker
router.post("/register", async (req, res) => {
  try {
    const { name, age, education, skills, certificates } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, message: "Name is required" });
    }

    const jobSeeker = await JobSeeker.create({
      name,
      age,
      education,
      skills: skills || [],
      certificates: certificates || []
    });

    res.json({
      success: true,
      message: "Job Seeker registered successfully",
      data: jobSeeker
    });
  } catch (error) {
    console.error("JobSeeker register error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// @route   GET /api/jobseeker
// @desc    Get all job seekers (simple listing)
router.get("/", async (_req, res) => {
  try {
    const seekers = await JobSeeker.find().sort({ createdAt: -1 });
    res.json({ success: true, data: seekers });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
