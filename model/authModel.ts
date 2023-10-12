import mongoose from "mongoose";

interface iUser {
  email?: string;
  password?: string;
  userName?: string;
  tasks?: {}[];
}

interface iUserData extends iUser, mongoose.Document {}

const userModel = new mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    createdAt: { type: Date, default: Date.now },
    tasks: [
        {
             type: mongoose.Types.ObjectId,
             ref: "tasks" 
            }
    ],
  },
  { timestamps: true }
);

export default mongoose.model<iUserData>("users", userModel);
