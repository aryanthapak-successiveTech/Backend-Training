import { AuthService } from "../Service/AuthService.js";

export class AuthController {
  authService;

  constructor() {
    this.authService = new AuthService();
  }

  login = async (req ,res, next) => {
    try {
      const { email, password } = req.body;
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


