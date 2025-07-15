import express from "express";
import { loginUser } from "./Controller/AuthController.js";
import { checkAuth } from "./Middlewares/AuthMiddleware.js";
import { dataSeeder } from "./Controller/DataController.js";
import { LogMiddleware } from "./Middlewares/LogMiddleware.js";
import { AppError } from "./Middlewares/ErrorMiddleware.js";

const authRouter = express.Router();
authRouter.route("/Login").post(loginUser);
authRouter.route("/Data").post(LogMiddleware,checkAuth,dataSeeder);
authRouter.use(AppError);
export default authRouter;
