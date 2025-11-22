import mongoose from "mongoose";

const jobSeekerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    education: String,
    skills: [String],
    certificates: [String]
});

export default mongoose.model("JobSeeker", jobSeekerSchema);
