import userModel from "../Models/User.js";
import { MongoError } from "mongodb";
import { ApiError } from "../../Middleware/ErrorMiddleware.js";


export class UserService{
    User;
    constructor(){
        this.User=userModel;
    }

    async insertUser(userData){
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