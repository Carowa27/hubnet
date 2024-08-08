import { NextFunction } from "express";
import { Request, Response } from "express";
import { Show } from "../models/Show";
import { Producer } from "../models/Producer";
import { NotFoundError } from "../utils/error";

export const getAllShows = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const shows = await Show.find();
    const formattedShows = shows.map((show) => {
      return {
        id: show._id,
        name: show.name,
        producer: show.producer,
        description: show.description,
        backgroundImg: show.backgroundImg,
        playlistURL: show.playlistURL,
      };
    });
    res.status(200).json({ shows: formattedShows });
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
    const producer = await Producer.findById(req.body.producer);
    if (!producer) throw new NotFoundError("Producer not found");
    const show = {
      name: req.body.name,
      producer: {
        id: req.body.producer,
        name: producer.name,
        logo: producer.logo,
      },
      description: req.body.description,
      backgroundImg: req.body.backgroundImg,
      playlistURL: req.body.playlistURL,
    };

    await Show.create(show);
    res.status(200).json({ message: "Show succesfully added" });
  } catch (error) {
    next(error);
  }
};
