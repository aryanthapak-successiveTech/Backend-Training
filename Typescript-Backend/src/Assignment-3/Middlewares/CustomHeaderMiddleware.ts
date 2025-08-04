import { NextFunction, Request, Response } from "express";

type ICustomHeader=(req: Request, res: Response, next: NextFunction)=>void


export class CustomHeaderMiddleware {
  addCustomHeader(headerName: string, headerValue: string) :ICustomHeader{
    return function (req: Request, res: Response, next: NextFunction) {
      res.setHeader(headerName, headerValue);
      next();
    };
  }
}
