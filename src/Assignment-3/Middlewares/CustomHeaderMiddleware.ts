import { NextFunction, Request, Response } from "express";

export const addCustomHeader = (
  headerName: string,
  headerValue: string
): ((req: Request, res: Response, next: NextFunction) => void) => {
  return function (req: Request, res: Response, next: NextFunction): void {
    res.setHeader(headerName, headerName);
    next();
  };
};
