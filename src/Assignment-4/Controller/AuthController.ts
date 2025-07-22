import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface ICredential {
  email: string;
  password: string;
}

const signToken = (payload: string):Promise<String> => {
  return new Promise((resolve, reject) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT secret is not defined");
    }
    const token = jwt.sign({payload}, secret);
    resolve(token);
  });
};

const authenticateUser = (userEmail: string,password:string):Boolean => {
    if(userEmail=="aryanthapak@gmail.com" && password==="Aryan@@@"){
        return true;
    }
    return false;
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
):Promise<Response> => {
  const { email, password }: ICredential = req.body;
  const isAuthenticated=authenticateUser(email,password);
  if (!isAuthenticated) {
    return res.status(401).json({
      status: "Failed",
      message: "Wrong Credentails",
    });
  }

  const token=await signToken(email);
  return res.status(201).json({
    status: "Success",
    message: "Login successful",
    token
  });
};
