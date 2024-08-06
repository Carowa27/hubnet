import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { ValidationError } from "../utils/error";

export const validateProducer = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name needs to be filled in"),
  body("description")
    .isString()
    .withMessage("Description must be string")
    .notEmpty()
    .withMessage("Description needs to be filled in"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ValidationError("Incorrect data", errors.array());
    }
    next();
  },
];
