import { Schema, model, models } from "mongoose";

const InterviewSchema = new Schema({
  role: String,
  type: String,
  level: String,
  techstack: [String],
  questions: [String],
  userId: Number,
  finalized: Boolean,
  coverImage: String,
  createdAt: String,
});

export const Interview = models.Interview || model("Interview", InterviewSchema);