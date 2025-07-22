import { NextFunction, Request, Response } from "express";

export class LogMiddleware {
  logDetails(req: Request, res: Response, next: NextFunction) :void{
    console.log("url", req.url);
    console.log("method", req.method);
    console.log("timestamp", new Date().toLocaleTimeString());
    next();
  }
}
