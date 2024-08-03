import { Request, Response, NextFunction } from 'express';

// Properly type the 'fn' parameter and the return function
export const catchErrors = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
  return function (req: Request, res: Response, next: NextFunction) {
    return fn(req, res, next).catch(next);
  };
};

export class CustomAPIError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, CustomAPIError.prototype);
  }
}

export class BadRequestError extends CustomAPIError {
  constructor(message: string) {
    super(message, 400);
  }
}

export class NotFoundError extends CustomAPIError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class UnauthenticatedError extends CustomAPIError {
  constructor(message: string) {
    super(message, 401);
  }
}

export class UnauthorizedError extends CustomAPIError {
  constructor(message: string) {
    super(message, 403);
  }
}

export class ValidationError extends BadRequestError {
  validationErrors: any[];

  constructor(message: string, validationErrors: any[]) {
    super(message);
    this.validationErrors = validationErrors;
  }
}
