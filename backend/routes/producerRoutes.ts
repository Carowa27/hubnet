import express from "express";
const router = express.Router();
import { validateProducer } from "../middleware/validationMiddleware";
import {
  getAllProducers,
  getProducer,
  createProducer,
} from "../controllers/producerController";

router.get("/", getAllProducers);
router.get("/:producerId", getProducer);
router.post("/", validateProducer, createProducer);

export default router;
