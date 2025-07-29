import jwt from "jsonwebtoken";

export class AuthService {
  authenticate(email, password){
    return email === "aryanthapak@gmail.com" && password === "Aryan@@@";
  }

  async generateToken(payload){
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT secret is not defined");
    }
    return jwt.sign({ payload }, secret);
  }
}