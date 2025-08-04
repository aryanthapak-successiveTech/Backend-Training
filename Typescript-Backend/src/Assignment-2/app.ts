import express from "express";
import { getUsers } from "./Controller/UserController";

const userRouter = express.Router();

userRouter.route("/").get(getUsers);

export default userRouter;
