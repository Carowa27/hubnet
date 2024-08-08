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
    const formattedProducers = producers.map((producer) => {
      return {
        id: producer._id,
        name: producer.name,
        description: producer.description,
        socialmedia: producer.socialmedia,
        cutout: producer.cutout,
        logo: producer.logo,
      };
    });
    res.status(200).json({ producers: formattedProducers });
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
    const shows = (await Show.find({ "producer.id": req.params.id })) || [];
    const sanitizedShows = shows.map((show) => {
      return {
        name: show.name,
        description: show.description,
        backgroundImg: show.backgroundImg,
        playlistURL: show.playlistURL,
      };
    });
    const formattedProducer = {
      id: producer._id,
      name: producer.name,
      description: producer.description,
      socialmedia: producer.socialmedia,
      cutout: producer.cutout,
      logo: producer.logo,
      shows: sanitizedShows,
    };
    res.status(200).json({ producer: formattedProducer });
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
