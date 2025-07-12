import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

const PASSWORD_REGEX = /^(?=.*[!@#$%^&*()_\-+=\[\]{};:'"\\|,.<>\/?]).{8,}$/;

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log("🔐 [REGISTER] body:", req.body);

  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  if (!password || !PASSWORD_REGEX.test(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters long and include at least one special character.",
    });
  }

  const exists = await User.findOne({ email });
  if (exists) {
    return res.status(400).json({ message: "Email already in use." });
  }

  // 4) Hash i čuvanje
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();

  res.status(201).json({ message: "User registered." });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("Invalid credentials.");

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).send("Invalid credentials.");

  const token = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "2h" }
  );

  res.json({ token });
};
