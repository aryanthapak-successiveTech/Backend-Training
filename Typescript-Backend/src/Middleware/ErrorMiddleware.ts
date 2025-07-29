import { NextFunction, Request, Response } from "express";

export class ApiError extends Error{
    statusCode: number;
    constructor(statusCode:number,msg:string){
        super(msg);
        this.statusCode=statusCode;
    }
}

export const AppError=(error:ApiError,req:Request,res:Response,next:NextFunction):Response=>{
    const errStatus=error.statusCode||500;
    const errMsg=error.message||"Something went wrong";
    console.error(error.stack);
    return res.status(errStatus).json({
        status:"Failed",
        message:errMsg
    })  
}

