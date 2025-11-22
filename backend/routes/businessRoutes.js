import express from "express";
import Business from "../models/Business.js";

const router = express.Router();

// @route   POST /api/business/register
// @desc    Register a new business
router.post("/register", async (req, res) => {
  try {
    const { name, industry, location, contactPerson, requiredSkills } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, message: "Business name is required" });
    }

    const business = await Business.create({
      name,
      industry,
      location,
      contactPerson,
      requiredSkills: requiredSkills || []
    });

    res.json({
      success: true,
      message: "Business registered successfully",
      data: business
    });
  } catch (error) {
    console.error("Business register error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// @route   GET /api/business
// @desc    Get all businesses
router.get("/", async (_req, res) => {
  try {
    const businesses = await Business.find().sort({ createdAt: -1 });
    res.json({ success: true, data: businesses });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
