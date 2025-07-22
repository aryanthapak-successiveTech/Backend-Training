import { NextFunction, Request, Response } from "express";
import { seedData } from "../../utils/seederUtil.js";

interface ICount {
  count: number;
}

export const dataSeeder = (req: Request, res: Response, next: NextFunction):Response=> {
  const { count }: ICount = req.body;
  const data = seedData(count);
  return res.status(200).json({
    status: "Success",
    data,
  });
};
