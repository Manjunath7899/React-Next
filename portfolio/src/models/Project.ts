import mongoose, { Document, Schema } from "mongoose";

interface IProject extends Document {
  name: string;
  website?: string;
  technologies: string;
  github?: string;
}

const ProjectSchema: Schema<IProject> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: false,
    },
    technologies: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
export default Project;
