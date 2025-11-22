import express from "express";

const router = express.Router();

// NOTE: This is placeholder logic.
// You can later replace this with real AI/ML or external API calls.

// @route   POST /api/ai/skill-analysis
router.post("/skill-analysis", (req, res) => {
  const { skills = [] } = req.body;

  const requiredSkills = [
    "Welding L3",
    "Solar Installation L2",
    "Digital Literacy L2",
    "Safety Protocols"
  ];

  res.json({
    success: true,
    requiredSkills,
    userSkills: skills
  });
});

// @route   POST /api/ai/gap-identify
router.post("/gap-identify", (req, res) => {
  // Very simple dummy score
  const { skills = [] } = req.body;
  const missingSkills = ["Welding L3", "Digital Literacy L2", "Safety Protocols"];
  const score = 65;

  res.json({
    success: true,
    score,
    missingSkills
  });
});

// @route   POST /api/ai/job-match
router.post("/job-match", (req, res) => {
  const { skills = [] } = req.body;

  const jobs = [
    {
      title: "Solar Technician",
      company: "XYZ Industries",
      location: "Delhi",
      match: 70,
      skills: ["Welding L3", "Solar Installation L2"]
    },
    {
      title: "Lathe Machine Operator",
      company: "Precision Tools",
      location: "Gurgaon",
      match: 85,
      skills: ["Lathe Operation L3"]
    },
    {
      title: "Electrical Technician",
      company: "Power Solutions Ltd",
      location: "Noida",
      match: 60,
      skills: ["Electrical Wiring", "Safety Protocols"]
    }
  ];

  res.json({
    success: true,
    jobs
  });
});

export default router;
