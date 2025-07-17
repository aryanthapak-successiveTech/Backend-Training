import { NextFunction, Request, Response } from "express";

export const LogMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    console.log("url",req.url);
    console.log("method",req.method);
    console.log("timestamp",new Date().toLocaleTimeString());
    next();
}
