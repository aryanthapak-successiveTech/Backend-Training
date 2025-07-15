import express from "express";
import { loginUser } from "./Controller/AuthController.js";
import { checkAuth } from "./Middlewares/AuthMiddleware.js";
import { dataSeeder } from "./Controller/DataController.js";
import { LogMiddleware } from "./Middlewares/LogMiddleware.js";
import { AppError } from "../Middleware/ErrorMiddleware.js";
import { rateLimit } from "../Middleware/RateLimiterMiddleware.js";
const authRouter = express.Router();
authRouter.route("/Login").post(loginUser);
authRouter
  .route("/Data")
  .post(rateLimit(3, 4), LogMiddleware, checkAuth, dataSeeder);
authRouter.use(AppError);
export default authRouter;
