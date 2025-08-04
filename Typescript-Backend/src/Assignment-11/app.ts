import express from "express";

import { AuthController } from "./Controllers/AuthController";
import { DataController } from "./Controllers/DataController";
import { AuthMiddleware } from "./Middlewares/AuthMiddleware";

const router = express.Router();

const authController = new AuthController();
const dataController = new DataController();
const authMiddleware = new AuthMiddleware();
router.route("/register").post(authController.registerUser);
router.route("/login").post(authController.loginUser);
router
  .route("/data")
  .get(authMiddleware.adminAccess, dataController.getUsers);
export default router;
