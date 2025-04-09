import mongoose from "mongoose";

interface IContact extends Document {
  name: string;
  email: string;
  message: string;
}

const ContactSchema = new mongoose.Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Contact =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);
export default Contact;
