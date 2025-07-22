import { NextFunction, Request, Response } from "express"
import { ApiError } from "../../Middleware/ErrorMiddleware.js";

export const validateParams=(req:Request,res:Response,next:NextFunction):void=>{
    const {page,limit}=req.query;
    if(!page||!limit){
        return next(new ApiError(400,"Limit and Page fields are mandatory"));
    }
    next();
}