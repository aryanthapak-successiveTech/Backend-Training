import { NextFunction, Request, Response } from "express";


export const addCustomHeader = (headerName: string, headerValue: string) => {
  return function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    res.setHeader(headerName,headerValue);
    next();
  };
};
