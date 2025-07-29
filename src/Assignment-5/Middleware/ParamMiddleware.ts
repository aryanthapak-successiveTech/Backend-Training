import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../Middleware/ErrorMiddleware";

export class ParamMiddleware {
  validateParams = (req: Request, res: Response, next: NextFunction):void => {
    const { page, limit } = req.query;
    if (!page || !limit) {
      return next(new ApiError(400, "Limit and Page query params are mandatory"));
    }
    next();
  };
}
