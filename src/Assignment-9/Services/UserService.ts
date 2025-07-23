import userModel from "../Models/User.js";
import { MongoError } from "mongodb";
import { ApiError } from "../../Middleware/ErrorMiddleware.js";
import { ISafeUser, IUser } from "../../Interfaces/User.Inteface.js";


export class UserService{
    private User;
    constructor(){
        this.User=userModel;
    }

    async insertUser(userData:IUser):Promise<ISafeUser>{
        try{
            const newUser=await this.User.create(userData);
            const {password,...safeUser}=newUser.toObject();
            return safeUser;
        }
        catch(err){
            if(err instanceof MongoError && err.code===11000){
                throw new ApiError(409,"User already exists");
            }

            throw err;
        }
    }
}