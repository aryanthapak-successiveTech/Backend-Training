import jwt from "jsonwebtoken";
export interface IAuthService {
  authenticate(email: string, password: string): boolean;
  generateToken(payload: string): Promise<string>;
}

export class AuthService implements IAuthService {
  authenticate(email: string, password: string): boolean {
    return email === "aryanthapak@gmail.com" && password === "Aryan@@@";
  }

  async generateToken(payload: string): Promise<string> {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT secret is not defined");
    }
    return jwt.sign({ payload }, secret);
  }
}