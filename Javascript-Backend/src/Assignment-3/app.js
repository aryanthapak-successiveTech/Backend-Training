import express from "express";
import { AuthController } from "./Controller/AuthController.js";
import { AuthMiddleware } from "./Middlewares/AuthMiddleware.js";
import { DataController } from "./Controller/DataController.js";
import { LogMiddleware } from "./Middlewares/LogMiddleware.js";
import { rateLimit } from "../Middleware/RateLimiterMiddleware.js";
const authRouter = express.Router();
const authController = new AuthController();
const logMiddleware = new LogMiddleware();
const authMiddleware = new AuthMiddleware();
const dataController = new DataController();
authRouter.route("/login").post(authController.login);
authRouter
  .route("/data")
  .post(
    rateLimit(3, 4),
    logMiddleware.logDetails,
    authMiddleware.checkAuth,
    dataController.dataSeeder
  );
export default authRouter;
