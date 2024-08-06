import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { ValidationError } from "../utils/error";

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
    .optional()
    .custom((value) => {
      if (typeof value !== "object") {
        throw new Error("socialmedia must be an object");
      }
      if (!value.media || typeof value.media !== "string") {
        throw new Error("media is required");
      }
      if (!value.URL || typeof value.URL !== "string") {
        throw new Error("URL is required");
      }
      return true;
    }),
  body("socialmedia.URL")
    .optional()
    .isURL()
    .withMessage("socialmediaURL must be a valid URL"),
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
  body("producer").isString().notEmpty().withMessage("Producer is required"),
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
    .isString()
    .withMessage("value must be of type string")
    .notEmpty()
    .withMessage("PlaylistURL is required"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ValidationError("Incorrect data", errors.array());
    }
    next();
  },
];
