import express from "express";
import { ValidationMiddleware } from "./Middleware/ValidationMiddleware.js";
import { getSeedData, registerUser } from "./Controller/UserController.js";
import { UrlMiddleware } from "./Middleware/UrlMiddleware.js";
import { AuthController } from "./Controller/AuthController.js";

const authController = new AuthController();
const urlMiddleware = new UrlMiddleware();
const validationMiddleware = new ValidationMiddleware();

const router = express.Router();

router
  .route("/register")
  .post(
    urlMiddleware.urlBasedValidate,
    validationMiddleware.validateUser,
    registerUser
  );
router
  .route("/login")
  .post(urlMiddleware.urlBasedValidate, authController.login);
router
  .route("/users/:count")
  .get(urlMiddleware.verifyParams, urlMiddleware.verifyLocation, getSeedData);

export default router;
