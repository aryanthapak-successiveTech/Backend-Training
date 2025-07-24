import { Document } from "mongoose";

export interface IGeo {
  lat: string;
  lng: string;
}
export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface ICount {
  count: number;
}

export interface ICredential {
  email: string;
  password: string;
  role:"admin"|"user"
}

export interface IStoredData {
  username: string;
  email: string;
  password: string;
}

export interface IUser{
  firstName:string,
  lastName:string,
  age:number,
  password:string,
  email:string
}

export interface ISafeUser{
  firstName:string,
  lastName:string,
  age:number,
  email:string
}

export interface IUserModel extends Document,IUser{
  authenticateUser:(password:string)=>Promise<boolean>
}

