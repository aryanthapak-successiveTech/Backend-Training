import { NextFunction, Request, Response } from "express"

export const checkAuth=(req:Request,res:Response,next:NextFunction):Response|void=>{
    const token=req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({
            status:"Failed",
            message:"No token found"
        })
    }

    next();
}