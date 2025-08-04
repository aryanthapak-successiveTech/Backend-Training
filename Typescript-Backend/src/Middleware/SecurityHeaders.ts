import { NextFunction, Request, Response } from "express";

export class SecurityHeaders{
    static setSecurityHeaders=(req:Request,res:Response,next:NextFunction)=>{
        res.setHeader("Cache-Control","no-store");
        res.setHeader("X-Content-Type-Options","nosniff");
        next();
    }
}