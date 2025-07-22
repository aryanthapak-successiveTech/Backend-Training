import { Request } from "express";

export interface IToken {
  email: string;
  role: "admin" | "user";
}

export interface IRequestWithToken extends Request {
  user?: IToken;
}

export interface ILogin{
    email:string,
    password:string
}