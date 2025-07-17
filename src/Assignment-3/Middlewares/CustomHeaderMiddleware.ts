import { NextFunction, Request, Response } from "express";

interface RequestWithHeaderInterface extends Request {
  customHeader?: string;
}

export const addCustomHeader = (headerName: string, headerValue: string) => {
  return function (
    req: RequestWithHeaderInterface,
    res: Response,
    next: NextFunction
  ) {
    const customHeader = req.header(headerName);
    req.customHeader = headerValue;
    next();
  };
};
