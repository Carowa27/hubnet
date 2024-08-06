import express from "express";
import { createShow, getAllShows } from "../controllers/showController";
import { validateShow } from "../middleware/validationMiddleware";
export const router = express.Router();

router.get("/", getAllShows);
router.post("/", validateShow, createShow);

export default router;
