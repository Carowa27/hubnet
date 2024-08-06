import { NextFunction } from "express";
import { Request, Response } from "express";
import { Show } from "../models/Show";

export const getAllShows = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const shows = await Show.find();
    res.status(200).json(shows);
  } catch (error) {
    next(error);
  }
};

export const createShow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await Show.create(req.body);
    res.status(200).json({ message: "Show succesfully added" });
  } catch (error) {
    next(error);
  }
};
