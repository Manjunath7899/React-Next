import mongoose from "mongoose";

interface IHome extends Document {
  heading: string;
  summary: string;
}

const HomeSchema = new mongoose.Schema<IHome>(
  {
    heading: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Home = mongoose.models.Home || mongoose.model<IHome>("Home", HomeSchema);
export default Home;
