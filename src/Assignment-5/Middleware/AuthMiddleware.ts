import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ApiError } from "../../Middleware/ErrorMiddleware.js";

interface UserDetailsInterface {
  email: string;
  role: "admin" | "role";
}

interface RequestWithTokenInterface extends Request {
  user?: UserDetailsInterface;
}

export const decryptToken = (
  req: RequestWithTokenInterface,
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
      console.log(decoded);
      if (typeof decoded === "object" && decoded.email && decoded.role) {
        req.user = {
          email: decoded.email,
          role: decoded.role,
        };
        return next();
      } else {
        return next(new ApiError(401, "Invalid token payload"));
      }
    }
  } catch (err) {
    console.log(err);
    return next(new ApiError(401, "Token verification failed"));
  }
};
