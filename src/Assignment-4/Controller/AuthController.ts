import { NextFunction, Request, Response } from "express";
import { AuthService } from "../Service/AuthService.js";
import { CredentialInterface } from "../../Interfaces/User.Inteface";

export class AuthController {
  private authService: AuthService | undefined;

  constructor() {
    this.authService == new AuthService();
  }

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password }: CredentialInterface = req.body;
      const isAuthenticated = this.authService?.authenticate(email, password);
      if (!isAuthenticated) {
        return res.status(401).json({
          status: "Failed",
          message: "Wrong Credentails",
        });
      }

      const token = await this.authService?.generateToken(email);
      return res.status(201).json({
        status: "Success",
        message: "Login successful",
        token,
      });
    } catch (err) {
      next(err);
    }
  };
};

