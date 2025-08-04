import { ApiError } from "../../Middleware/ErrorMiddleware.js";

export class AuthMiddleware{
    checkAuth=(req,res,next)=>{
        const token=req.headers.authorization?.split(" ")[1];
        if(!token){
            next(new ApiError(401,"No token found"));
        }

        next();
    }
};