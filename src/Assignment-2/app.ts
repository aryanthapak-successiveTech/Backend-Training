import express from "express";
import { getUsers } from "./Controller/UserController.js";
import { verifyLocation } from "../Assignment-3/Middleware/UrlMiddleware.js";

const userRouter = express.Router();

userRouter.route("/").get(getUsers);

export default userRouter;
