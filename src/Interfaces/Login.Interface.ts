import { Request } from "express";

export interface TokenInterface {
  email: string;
  role: "admin" | "user";
}

export interface RequestWithTokenInterface extends Request {
  user?: TokenInterface;
}

export interface LoginInterface{
    email:string,
    password:string
}