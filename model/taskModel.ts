import mongoose, { Schema } from "mongoose";

interface iTask {
  title?: string;
  description?: string;
  completed?: boolean;
  createdAt?: Date;
  users?: {};
  userID?: string;

}

interface iTaskData extends iTask, mongoose.Document {}

const taskModel = new mongoose.Schema(
  {
    title: { type: String, required: true },
    userID:  { type: String},
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    users: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model<iTaskData>("tasks", taskModel);
