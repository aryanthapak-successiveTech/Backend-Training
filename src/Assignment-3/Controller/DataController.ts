import { NextFunction, Request, Response } from "express";
import { seedData } from "../../utils/seederUtil.js";
import { ICount } from "../../Interfaces/User.Inteface.js";

export class DataController {
  dataSeeder = (req: Request, res: Response, next: NextFunction) => {
    const { count }: ICount = req.body;
    const data = seedData(count);
    return res.status(200).json({
      status: "Success",
      data,
    });
  };
}
