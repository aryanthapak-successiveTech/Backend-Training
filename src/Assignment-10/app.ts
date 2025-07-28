import express from "express";

import { AuthController } from "./Controllers/AuthController.js";

const router=express.Router();

const authController=new AuthController();

router.route("/register").post(authController.registerUser);
router.route("/login").post(authController.loginUser);

export default router;