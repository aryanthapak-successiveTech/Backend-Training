import Joi from "joi";
import { ApiError } from "../../Middleware/ErrorMiddleware.js";

const detailsValidationSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8),
});

export class ValidationMiddleware {
  validateDetails = (req, res, next) => {
    const { email, password } = req.body;
    const { error } = detailsValidationSchema.validate({ email, password });
    if (error) {
      return next(new ApiError(400, error.message));
    }
    next();
  };
}
