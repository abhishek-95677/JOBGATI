import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    industry: {
      type: String
    },
    location: {
      type: String
    },
    contactPerson: {
      type: String
    },
    requiredSkills: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);
export default Business;
