import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import jobSeekerRoutes from "./routes/jobSeekerRoutes.js";
import businessRoutes from "./routes/businessRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use("/api/auth", authRoutes);
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.get("/", (_req, res) => {
  res.send("JobGati backend is running ✅");
});

app.use("/api/jobseeker", jobSeekerRoutes);
app.use("/api/business", businessRoutes);
app.use("/api/ai", aiRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
