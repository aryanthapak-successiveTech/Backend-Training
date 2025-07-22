import { NextFunction, Request, Response } from "express"
import { ApiError } from "../../Middleware/ErrorMiddleware.js";

// export const checkAuth=(req:Request,res:Response,next:NextFunction)=>{
//     const token=req.headers.authorization?.split(" ")[1];
//     if(!token){
//         return res.status(401).json({
//             status:"Failed",
//             message:"No token found"
//         })
//     }

//     next();
// }

export class AuthMiddleware{
    checkAuth=(req:Request,res:Response,next:NextFunction)=>{
        const token=req.headers.authorization?.split(" ")[1];
        if(!token){
            next(new ApiError(401,"No token found"));
        }

        next();
    }
};