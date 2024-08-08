import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { ValidationError } from "../utils/error";
import { Producer } from "../models/Producer";

export const validateProducer = [
  body("name")
    .isString()
    .withMessage("value must be of type string")
    .notEmpty()
    .withMessage("name is required"),
  body("description")
    .isString()
    .withMessage("value must be of type string")
    .notEmpty()
    .withMessage("description is required"),
  body("socialmedia")
    .exists()
    .isArray()
    .withMessage("socialmedia must be an array")
    .optional(),
  body("socialmedia.*")
    .isObject()
    .withMessage("socialmedia must contain objects"),
  body("socialmedia.*.media")
    .isString()
    .withMessage("media must be of type string")
    .notEmpty()
    .withMessage("media is required"),
  body("socialmedia.*.URL")
    .isURL()
    .withMessage("URL must be a valid URL")
    .notEmpty()
    .withMessage("URL is required"),
  body("cutout")
    .isString()
    .withMessage("value must be of type string")
    .notEmpty()
    .withMessage("cutout is required"),
  body("logo")
    .isString()
    .withMessage("value must be of type string")
    .notEmpty()
    .withMessage("logo is required"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ValidationError("Incorrect data", errors.array());
    }
    next();
  },
];

export const validateShow = [
  body("name").isString().notEmpty().withMessage("Name is required"),
  body("producer")
    .notEmpty()
    .withMessage("producer is required")
    .isString()
    .withMessage("value must be of type string")
    .custom(async (value) => {
      const producer = await Producer.findById(value);
      if (!producer) throw new Error("Producer do not exists");
    }),
  body("description")
    .isString()
    .withMessage("value must be of type string")
    .notEmpty()
    .withMessage("Description is required"),
  body("backgroundImg")
    .isString()
    .withMessage("value must be of type string")
    .notEmpty()
    .withMessage("BackgroundImg is required"),
  body("playlistURL")
    .isURL()
    .withMessage("playlistURL must be a valid URL")
    .notEmpty()
    .withMessage("playlistURL is required"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ValidationError("Incorrect data", errors.array());
    }
    next();
  },
];
