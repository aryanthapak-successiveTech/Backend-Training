import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../Middleware/ErrorMiddleware.js";
import { seedData } from "../../utils/seederUtil.js";
import { dummyData } from "../../Assignment-2/mockData.js";

interface IUserDetails {
  email: string;
  role: "admin" | "role";
}

interface IRequestWithToken extends Request {
  user?: IUserDetails;
}

export const getDummyUsersData = (
  req: IRequestWithToken,
  res: Response,
  next: NextFunction
) => {
  try {
    const userDetails = req.user;
    const count = Number(req.params.count);
    if (!userDetails) {
      return next(new ApiError(404, "Token not found"));
    }

    const role = userDetails.role;

    if (role !== "admin") {
      return next(new ApiError(403, "Forbidden Access"));
    }

    if (count) {
    }
    const seededData = seedData(count);

    return res.status(200).json({
      status: "Success",
      data: seededData,
    });
  } catch (err) {
    next(err);
  }
};


export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const limitStr = req.query.limit as string | undefined;
    const pageStr = req.query.page as string | undefined;

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

