import { AuthService } from "../Services/AuthService.js";

export class AuthController {
  authService;
  constructor() {
    this.authService = new AuthService();
  }

  registerUser = async (
    req,
    res,
    next
   ) => {
    try {
      const userData = req.body;
      const newUser = await this.authService.insertUser(userData);
      return res.status(201).json({
        status: "Success",
        data: newUser,
      });
    } catch (err) {
      next(err);
    }
  };

  loginUser = async (req, res, next) => {
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
