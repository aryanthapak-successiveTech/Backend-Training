import jwt from "jsonwebtoken";
import { credentialData } from "../Data/CredentialData.js";
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../Middleware/ErrorMiddleware.js";

interface TokenInterface {
  email: string;
  role: "admin" | "user";
}

const signToken = (payload: TokenInterface) => {
  return new Promise((resolve, reject) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT secret is not defined");
    }
    const token = jwt.sign(payload, secret);
    resolve(token);
  });
};

const findUserDetails = (email: string) => {
  const userDetails = credentialData.find((user) => user.email === email);
  return userDetails;
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email: enteredEmail, password: enteredPassword } = req.body;
    const user = findUserDetails(enteredEmail);
    if(!user){
        return next(new ApiError(404,"User not found"));
    }
    const isAuthenticated=enteredPassword===user.password;

    if(!isAuthenticated){
        return next(new ApiError(401,"Unauthorized"));
    }

    const token=await signToken({email:user.email,role:user.role});
    return res.status(201).json({
        status:"Success",
        message:"Logged in successfully",
        token
    })
  } catch (err) {
    next(err);
  }
};
