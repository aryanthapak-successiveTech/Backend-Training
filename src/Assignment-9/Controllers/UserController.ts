import { NextFunction, Request, Response } from "express";
import { UserService } from "../Services/UserService.js";
import { IUser } from "../../Interfaces/User.Inteface.js";

export class UserController{
    private userService:UserService;
    constructor(){
        this.userService=new UserService();
    }

    registerUser=async(req:Request,res:Response,next:NextFunction):Promise<Response|void>=>{
        try{
            const userData:IUser=req.body;
            const newUser=await this.userService.insertUser(userData);
            return res.status(201).json({
                status:"Success",
                data:newUser
            });
        }
        catch(err){
            next(err);
        }
    }


}