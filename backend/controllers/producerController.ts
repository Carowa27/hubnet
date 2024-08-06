import { NextFunction } from "express";
import { Producer } from "../models/Producer";
import { NotFoundError } from "../utils/error";
import { Request, Response } from "express";
import { Show } from "../models/Show";

export const getAllProducers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const producers = await Producer.find();
    res.status(200).json(producers);
  } catch (error) {
    next(error);
  }
};

export const getProducer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const producer = await Producer.findById(req.params.id);
    if (!producer) throw new NotFoundError("Producer not found");
    const shows = (await Show.find({ producer: req.params.id })) || [];
    res.status(200).json({ producer, shows });
  } catch (error) {
    next(error);
  }
};

export const createProducer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await Producer.create(req.body);
    res.status(200).json({ message: "Producer succesfully added" });
  } catch (error) {
    next(error);
  }
};
