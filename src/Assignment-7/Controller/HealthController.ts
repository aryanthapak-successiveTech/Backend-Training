import { NextFunction, Request, Response } from "express";
import { generateRandomHealth } from "../../utils/generateRandomHealth.js";

export class HealthController{
  showHealth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const status = generateRandomHealth();
    return res.status(200).json({
      status,
    });
  } catch (err) {
    next(err);
  }
};
}
 
