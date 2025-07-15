import axios from "axios";
import { NextFunction, Request, Response } from "express";
import routeBaseValidation from "../Config/ValidationConfig.js";
import { ApiError } from "../../Middleware/ErrorMiddleware.js";

export const verifyParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const queryParams = Object.values(req.params);
  for (const param of queryParams) {
    if (Number(param)) {
      return res.status(406).json({
        status: "Failed",
        message: "Params should be numeric",
      });
    }
  }
  next();
};

export const verifyLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ip = req.ip;
  const ipInfo = await axios.get(`http://ip-api.com/json/${ip}`);
  const country = ipInfo.data.country;
  if (country !== "INDIA" && ip !== "::1") {
    return res.status(403).json({
      status: "Failed",
      message: "Not available at your location",
    });
  }
  next();
};

export const urlBasedValidate=(req:Request,res:Response,next:NextFunction)=>{
  const path:string=req.url;
  if (path in routeBaseValidation) {
  const validationSchema = routeBaseValidation[path];
  const {error} = validationSchema.validate(req.body);
  if (error) {
    next(new ApiError(400,"wrong details"));
  }
}
next();
}