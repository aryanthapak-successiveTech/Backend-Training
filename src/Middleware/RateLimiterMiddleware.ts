import { NextFunction, Request, Response } from "express";
import { ApiError } from "./ErrorMiddleware.js";

type RateLimit=(req:Request,res:Response,next:NextFunction)=>Response|void


export const rateLimit = (timeInterval: number, maxRequests: number): RateLimit=> {
  const userMap = new Map<string, number[]>();
  return function (req: Request, res: Response, next: NextFunction):Response|void {
    const userIp = req.ip;

    const now = Date.now();
    if (!userIp) {
      return res.status(400).json({ message: "No Ip found" });
    }
    if (!userMap.has(userIp)) {
      userMap.set(userIp, [now]);
      return next();
    }

    const userTimeStamps = userMap.get(userIp);
    const timeDiff: number =
      userTimeStamps && userTimeStamps.length > 0
        ? now - userTimeStamps[userTimeStamps.length - 1]
        : 0;

    userTimeStamps?.push(now);

    if (userTimeStamps && userTimeStamps.length <= maxRequests) {
      return next();
    }
    if (timeDiff / 1000 > timeInterval) {
      userMap.delete(userIp);
      userMap.set(userIp, [now]);
      return next();
    }

    return next(new ApiError(429, "Too many requests"));
  };
};
