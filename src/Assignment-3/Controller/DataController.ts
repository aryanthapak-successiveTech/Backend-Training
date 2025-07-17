import { NextFunction, Request, Response } from "express";
import {seedData} from "../../utils/seederUtil.js"

interface CountInterface{
    count:number
}

export const dataSeeder=(req:Request,res:Response,next:NextFunction)=>{
    const {count}:CountInterface=req.body;
    const data=seedData(count);
    return res.status(200).json({
        status:"Success",
        data
    })
}