import { ApiError } from "../../Middleware/ErrorMiddleware.js";
import { AuthService } from "../Service/AuthService.js";


export class AuthController{
  authService
  constructor(){
    this.authService=new AuthService();
  }

  loginUser = async (req, res, next)=> {
  try {
    const { email: enteredEmail, password: enteredPassword } = req.body;
    const user = this.authService.findUserDetails(enteredEmail);
    if(!user){
        return next(new ApiError(404,"User not found"));
    }
    const isAuthenticated=enteredPassword===user.password;

    if(!isAuthenticated){
        return next(new ApiError(401,"Unauthorized"));
    }

    const token=await this.authService.signToken({email:user.email,role:user.role});
    return res.status(201).json({
        status:"Success",
        message:"Logged in successfully",
        token
    })
  } catch (err) {
    next(err);
  }
}
}
