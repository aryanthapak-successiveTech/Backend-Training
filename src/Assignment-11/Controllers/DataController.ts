import { NextFunction, Request, Response } from "express";
import { dummyData } from "../../Assignment-2/mockData.js";

export class DataController {

  getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    try {
      const limitStr = req.query.limit as string | undefined;
      const pageStr = req.query.page as string | undefined;

       if (!req.query.limit || !req.query.page) {
      return res.status(200).json({
        status: "Successful",
        data: dummyData,
      });
    }
      const limit: number = Number(limitStr);
      const page: number = Number(pageStr);

      const startIdx = (page - 1) * limit;
      const filteredData = dummyData.slice(startIdx, startIdx + Number(limit));
      if (filteredData.length == 0) {
        return res.status(404).json({
          status: "Failed",
          message: "Not Found",
        });
      }
      return res.status(200).json({
        status: "Successful",
        data: filteredData,
      });
    } catch (err) {
      return res.status(500).json({
        status: "Failed",
        message: "Some error happened",
      });
    }
  };
}
