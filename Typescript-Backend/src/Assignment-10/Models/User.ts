import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import { IUserModel } from "../../Interfaces/User.Inteface";
const userSchema=new mongoose.Schema<IUserModel>({
    firstName:{
        type:String,
        required:[true,"first name is required"]
    },
    lastName:{
        type:String,
        required:[true,"last name is required"]
    },
    email:{
        type:String,
        required:[true,"last name is required"],
        unique:true
    },
    age:{
        type:Number,
        required:[true,"Age is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
})

userSchema.pre("save",async function(next):Promise<void>{
    this.password=await bcrypt.hash(this.password,12);
    next();
});

userSchema.methods.authenticateUser=async function(candidatePassword:string):Promise<boolean>{
    const isAuthenticated=await bcrypt.compare(candidatePassword,this.password);
    return isAuthenticated;
}

const userModel=mongoose.model("OldUser",userSchema);

export default userModel;