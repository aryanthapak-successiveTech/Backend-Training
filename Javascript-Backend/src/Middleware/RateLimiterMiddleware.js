
import { ApiError } from "./ErrorMiddleware.js";



export const rateLimit = (timeInterval, maxRequests)=> {
  const userMap = new Map();
  return function (req, res, next) {
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
    const timeDiff =
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
