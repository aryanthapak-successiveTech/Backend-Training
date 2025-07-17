import axios from "axios";
import { NextFunction, Request, Response } from "express";
import routeBaseValidation from "../Config/ValidationConfig.js";
import { ApiError } from "../../Middleware/ErrorMiddleware.js";

export const verifyParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const queryParams = Object.values(req.params);
    for (const param of queryParams) {
      if (Number(param)) {
        return next(new ApiError(406, "Params should be numberic"));
      }
    }
    next();
  } catch (err) {
    next(new ApiError(500, "Something went wrong"));
  }
};

export const verifyLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ip = req.ip;
    const ipInfo = await axios.get(`http://ip-api.com/json/${ip}`);
    const country = ipInfo.data.country;
    if (country !== "INDIA" && ip !== "::1") {
      return next(new ApiError(403, "Not available at your location"));
    }
    next();
  } catch (err) {
    next(new ApiError(500, "Something went wrong"));
  }
};

export const urlBasedValidate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const path: string = req.url;
    if (path in routeBaseValidation) {
      const validationSchema = routeBaseValidation[path];
      const { error } = validationSchema.validate(req.body);
      if (error) {
        next(new ApiError(400, "wrong details"));
      }
    }
    next();
  } catch (err) {
    next(new ApiError(500, "Something went wrong"));
  }
};
