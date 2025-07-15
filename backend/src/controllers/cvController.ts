import { Request, Response } from "express";
import CVData from "../models/CVData";
import pdfParse from "pdf-parse";

export const uploadCV = async (req: Request, res: Response) => {
  if (!req.file) return res.status(400).send("No file uploaded.");
  const userId = (req as any).user._id;

  // Parse PDF into text and metadata
  const data = await pdfParse(req.file.buffer);
  const content = {
    text: data.text,
    info: data.info,
    metadata: data.metadata,
  };

  // Upsert: update || create
  const cv = await CVData.findOneAndUpdate(
    { userId },
    { content },
    { new: true, upsert: true }
  );

  return res.json(cv);
};

export const getCV = async (req: Request, res: Response) => {
  const userId = (req as any).user._id;
  const cv = await CVData.findOne({ userId });
  if (!cv) return res.status(404).send("CV not found.");
  return res.json(cv);
};
