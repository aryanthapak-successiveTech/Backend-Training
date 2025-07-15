import { NextFunction, Request, Response } from "express";

export const rateLimit = (timeInterval: number, maxRequests: number) => {
  const userMap = new Map<string, number[]>();
  return function (req: Request, res: Response, next: NextFunction) {
    const userIp = req.ip;
    const now = Date.now();
    if (!userIp) {
      return res.status(400).json({ message: "No Ip found" });
    }
    if (!userMap.has(userIp)) {
      userMap.set(userIp, [now]);
      return next();
    }

    
  };
};
