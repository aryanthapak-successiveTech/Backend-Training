import { ApiError } from "../../Middleware/ErrorMiddleware.js";

export class ParamMiddleware {
  validateParams = (req, res, next)=> {
    const { page, limit } = req.query;
    if (!page || !limit) {
      return next(new ApiError(400, "Limit and Page query params are mandatory"));
    }
    next();
  };
}
