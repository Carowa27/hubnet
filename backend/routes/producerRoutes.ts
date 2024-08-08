import express from "express";
import { validateProducer } from "../middleware/validationMiddleware";
import {
  getAllProducers,
  getProducer,
  createProducer,
} from "../controllers/producerController";
const router = express.Router();

router.get("/", getAllProducers);
router.get("/:id", getProducer);
router.post("/", validateProducer, createProducer);

export default router;
