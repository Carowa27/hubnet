import { Request, Response, NextFunction } from 'express';
import { CustomAPIError, ValidationError } from '../utils/error';

interface CustomError {
  statusCode: number;
  message: string;
  validationErrors?: any[];
  error?: Error;
}

export const errorMiddleware = (
  error: CustomAPIError | Error,
  req: Request,
  res: Response,
) => {
  const customError: CustomError = {
    statusCode: error instanceof CustomAPIError ? error.statusCode : 500,
    message: error.message || 'Something went wrong, try again later',
  };

  if (process.env.NODE_ENV === 'development') {
    console.error(error);
    customError.error = error;
  }

  if (error instanceof ValidationError) {
    customError.validationErrors = error.validationErrors;
  }

  if ((error as any).name === 'CastError') {
    customError.message = `No item found with id : ${(error as any).value}`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json(customError);
};
