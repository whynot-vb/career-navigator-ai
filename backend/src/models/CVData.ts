import mongoose from "mongoose";

const cvDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("CVData", cvDataSchema);
