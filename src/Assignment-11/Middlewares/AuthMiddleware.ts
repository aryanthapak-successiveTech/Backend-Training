import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { ApiError } from "../../Middleware/ErrorMiddleware.js";
import { IRequestWithToken } from "../../Interfaces/Login.Interface.js";

export class AuthMiddleware {
  adminAccess = (
    req: IRequestWithToken,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return next(new ApiError(404, "Token not found"));
      }
      const secret = process.env.JWT_SECRET;
      if (secret) {
        const decoded = jwt.verify(token, secret);
        if(typeof decoded=="object" && decoded.role=="admin"){
          return next();
        } 
        return next(new ApiError(403,"Forbidden Access"));
        } else {
          return next(new ApiError(401, "Invalid token payload"));
        }
    } catch (err) {
      console.log(err);
      return next(new ApiError(401, "Token verification failed"));
    }
  };
}
