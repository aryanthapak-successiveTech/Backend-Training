import userModel from "../Models/User";
import { MongoError } from "mongodb";
import { ApiError } from "../../Middleware/ErrorMiddleware";
import { ISafeUser, IUser } from "../../Interfaces/User.Inteface";
import jwt from "jsonwebtoken"
export class AuthService {
  private User;
  constructor() {
    this.User = userModel;
  }

  async insertUser(userData: IUser): Promise<ISafeUser> {
    try {
      const newUser = await this.User.create(userData);
      const { password, ...safeUser } = newUser.toObject();
      return safeUser;
    } catch (err) {
      if (err instanceof MongoError && err.code === 11000) {
        throw new ApiError(409, "User already exists");
      }

      throw err;
    }
  }

  verifyUser = async (email: string,password:string) => {
    const user = await this.User.findOne({ email });
    if(!user){
        throw new ApiError(404,"User not exits");
    }

    const isAuthenticated=await user.authenticateUser(password);
    if(!isAuthenticated){
        throw new ApiError(401,"Unauthorized");
    }
    if(!process.env.JWT_SECRET){
        throw new Error("No token found");
    }
    const token= jwt.sign({email,role:user.role},process.env.JWT_SECRET);
    return token;
  };
}
