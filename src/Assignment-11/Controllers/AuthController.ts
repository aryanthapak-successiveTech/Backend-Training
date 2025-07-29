import { NextFunction, Request, Response } from "express";
import { AuthService } from "../Services/AuthService.js";
import { IUser } from "../../Interfaces/User.Inteface.js";

export class AuthController {
  private authService: AuthService;
  constructor() {
    this.authService = new AuthService();
  }

  registerUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const userData: IUser = req.body;
      const newUser = await this.authService.insertUser(userData);
      return res.status(201).json({
        status: "Success",
        data: newUser,
      });
    } catch (err) {
      next(err);
    }
  };

  loginUser = async (req: Request, res: Response, next: NextFunction) :Promise<Response|void> => {
    try {
      const { email, password } = req.body;
      const token = await this.authService.verifyUser(email, password);
      return res.status(200).json({
        status: "Success",
        token,
      });
    } catch (err) {
      next(err);
    }
  };
}
