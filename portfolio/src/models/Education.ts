import mongoose, { Document, Schema } from "mongoose";

interface IEducation extends Document {
  degree: string;
  year: string;
  college: string;
}

const EducationSchema: Schema<IEducation> = new mongoose.Schema(
  {
    degree: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Education =
  mongoose.models.Education ||
  mongoose.model<IEducation>("Education", EducationSchema);
export default Education;
