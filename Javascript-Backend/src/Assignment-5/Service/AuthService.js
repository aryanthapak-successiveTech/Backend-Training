import { credentialData } from "../Data/CredentialData.js";
import jwt from "jsonwebtoken"
export class AuthService{
    findUserDetails(email){
         const userDetails = credentialData.find((user) => user.email === email);
         return userDetails;
    }    

    signToken = (payload) => {
  return new Promise((resolve, reject) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT secret is not defined");
    }
    const token = jwt.sign(payload, secret);
    resolve(token);
  });
};
}