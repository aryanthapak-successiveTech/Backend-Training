import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { ApiError } from "../../Middleware/ErrorMiddleware.js";

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  email: Joi.string().email().required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

export class ValidationMiddleware {
  validateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password, email } = req.body;
      if (!userSchema.validate({ username, password, email })) {
        return res.status(401).json({
          status: "Failed",
          message: "Details aren't valid",
        });
      }
      next();
    } catch (err) {
      return res.status(500).json({
        status: "Failed",
        message: "Internal Server error",
      });
    }
  };
}
