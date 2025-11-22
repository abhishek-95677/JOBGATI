import mongoose from "mongoose";

const jobSeekerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    // email: {
    //   type: String,
    //   required: true,
    //   trim: true
    // },
    // password: {
    //   type: Number,
    //   required: true,
    //   trim: true
    // },
    age: {
      type: Number,
      min: 16,
      max: 80
    },
    education: {
      type: String
    },
    skills: {
      type: [String],
      default: []
    },
    certificates: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

const JobSeeker = mongoose.model("JobSeeker", jobSeekerSchema);
export default JobSeeker;
