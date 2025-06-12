import mongoose from "mongoose";

interface IUser extends Document {
  username: string;
  password: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;
