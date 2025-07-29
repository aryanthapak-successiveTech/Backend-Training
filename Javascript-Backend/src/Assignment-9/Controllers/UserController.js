import { UserService } from "../Services/UserService.js";

export class UserController{
    userService;
    constructor(){
        this.userService=new UserService();
    }

    registerUser=async(req,res,next)=>{
        try{
            const userData=req.body;
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