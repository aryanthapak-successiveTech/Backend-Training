import mongoose from "mongoose"
import bcrypt from "bcryptjs";

const userSchema=new mongoose.Schema({
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
        required:[true,"Password is required"],
    },
    role:{
        type:String,
        enum:["admin","user"],
        required:true
    }
})

userSchema.pre("save",async function(next){
    this.password=await bcrypt.hash(this.password,12);
    next();
});

userSchema.methods.authenticateUser=async function(candidatePassword){
    const isAuthenticated=await bcrypt.compare(candidatePassword,this.password);
    return isAuthenticated;
}

const userModel=mongoose.model("User",userSchema);

export default userModel;