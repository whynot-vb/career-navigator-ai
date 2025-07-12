// src/models/CVData.ts
import mongoose from "mongoose";

const cvDataSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: Object, required: true },
  },
  {
    timestamps: true, // automatski added createdAt and updatedAt
  }
);

export default mongoose.model("CVData", cvDataSchema);
