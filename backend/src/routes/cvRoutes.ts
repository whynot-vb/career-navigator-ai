import { Router } from "express";
import multer from "multer";
import { authMiddleware } from "../middleware/authMiddleware";
import { uploadCV, getCV } from "../controllers/cvController";

const router = Router();
const upload = multer(); // čuva u mem.

router.post("/", authMiddleware, upload.single("file"), uploadCV);
router.get("/", authMiddleware, getCV);

export default router;
