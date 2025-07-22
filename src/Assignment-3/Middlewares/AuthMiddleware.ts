import { NextFunction, Request, Response } from "express"
import { ApiError } from "../../Middleware/ErrorMiddleware.js";

export class AuthMiddleware{
    checkAuth=(req:Request,res:Response,next:NextFunction):void=>{
        const token=req.headers.authorization?.split(" ")[1];
        if(!token){
            next(new ApiError(401,"No token found"));
        }

        next();
    }
};