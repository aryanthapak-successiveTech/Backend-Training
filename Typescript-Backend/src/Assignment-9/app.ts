import express from "express";

import { UserController } from "./Controllers/UserController";

const router=express.Router();

const userController=new UserController();

router.route("/register").post(userController.registerUser);

export default router;