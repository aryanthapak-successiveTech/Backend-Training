import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { ApiError } from "../../Middleware/ErrorMiddleware";
import { ILogin } from "../../Interfaces/Login.Interface";

const detailsValidationSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8),
});

export class ValidationMiddleware {
  validateDetails = (req: Request, res: Response, next: NextFunction) => {
    const { email, password }: ILogin = req.body;
    const { error } = detailsValidationSchema.validate({ email, password });
    if (error) {
      return next(new ApiError(400, error.message));
    }
    next();
  };
}
