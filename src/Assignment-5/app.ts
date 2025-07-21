import express from "express";
import { ValidationMiddleware } from "./Middleware/ValidationMiddleware.js";
import { AuthController} from "./Controller/AuthController.js";
import { AuthMiddleware} from "./Middleware/AuthMiddleware.js";
import { DataController } from "./Controller/DataController.js";
import { ErrorController} from "./Controller/ErrorController.js";
import { ParamMiddleware } from "./Middleware/ParamMiddleware.js";

const router=express.Router();

const authController=new AuthController();
const errorController=new ErrorController();
const dataController=new DataController();

const authMiddleware=new AuthMiddleware();
const validationMiddleware=new ValidationMiddleware();
const paramsMiddleware=new ParamMiddleware();
router.route("/login").post(validationMiddleware.validateDetails,authController.loginUser);
router.route("/users/:count").get(authMiddleware.decryptToken,dataController.getDummyUsersData);
router.route("/error").get(errorController.getError);
router.route("/users").get(paramsMiddleware.validateParams,dataController.getUsers);

export default router;
