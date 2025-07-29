import express from "express";
import { ValidationMiddleware } from "./Middleware/ValidationMiddleware";
import {  UserController } from "./Controller/UserController";
import { UrlMiddleware } from "./Middleware/UrlMiddleware";
import { AuthController } from "./Controller/AuthController";

const authController = new AuthController();
const userController=new UserController();
const urlMiddleware = new UrlMiddleware();
const validationMiddleware = new ValidationMiddleware();

const router = express.Router();

router
  .route("/register")
  .post(
    urlMiddleware.urlBasedValidate,
    validationMiddleware.validateUser,
    userController.registerUser
  );
router
  .route("/login")
  .post(urlMiddleware.urlBasedValidate, authController.login);
router
  .route("/users/:count")
  .get(urlMiddleware.verifyParams, urlMiddleware.verifyLocation, userController.getSeedData);

export default router;
