import mongoose, { Document, Schema } from "mongoose";

interface IExperience extends Document {
  position: string;
  company: string;
  duration: string;
  location: string;
  jobprofile: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ExperienceSchema: Schema<IExperience> = new mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobprofile: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Experience =
  mongoose.models.Experience ||
  mongoose.model<IExperience>("Experience", ExperienceSchema);
export default Experience;
