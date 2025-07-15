import express from "express";
import { validateUser } from "./Middleware/ValidationMiddleware.js";
import { getSeedData, registerUser } from "./Controller/UserController.js";
import { verifyParams, verifyLocation, urlBasedValidate } from "./Middleware/UrlMiddleware.js";
import { loginUser } from "./Controller/AuthController.js";

const router = express.Router();

router.route("/register").post(urlBasedValidate,validateUser, registerUser);
router.route("/login").post(urlBasedValidate,loginUser);
router.route("/users/:count").get(verifyParams,verifyLocation,getSeedData);

export default router;
