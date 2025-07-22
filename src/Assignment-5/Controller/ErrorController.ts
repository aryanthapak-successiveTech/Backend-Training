import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../Middleware/ErrorMiddleware.js";

export const getError=(req:Request,res:Response,next:NextFunction):void=>{
    next(new ApiError(500,"This is an error router"));
}