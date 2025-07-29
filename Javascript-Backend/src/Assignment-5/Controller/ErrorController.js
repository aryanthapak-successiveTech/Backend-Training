
import { ApiError } from "../../Middleware/ErrorMiddleware.js";
export class ErrorController{
    getError=(req,res,next)=>{
    next(new ApiError(500,"This is an error route"));
}
}