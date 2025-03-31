import mongoose, { Document, Schema } from "mongoose";

interface IAbout extends Document {
  aboutme: string;
  noofprojects: string;
  yearofexperience: string;
  noofclients: string;
  skills?: string;
}

const AboutSchema: Schema<IAbout> = new mongoose.Schema(
  {
    aboutme: {
      type: String,
      required: true,
    },
    noofprojects: {
      type: String,
      required: true,
    },
    yearofexperience: {
      type: String,
      required: true,
    },
    noofclients: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
    },
  },
  { timestamps: true }
);

const About =
  mongoose.models.About || mongoose.model<IAbout>("About", AboutSchema);
export default About;
