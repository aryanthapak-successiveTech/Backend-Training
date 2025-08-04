import express from "express";
import { ValidationMiddleware } from "./Middleware/ValidationMiddleware";
import { AuthController} from "./Controller/AuthController";
import { AuthMiddleware} from "./Middleware/AuthMiddleware";
import { DataController } from "./Controller/DataController";
import { ErrorController} from "./Controller/ErrorController";
import { ParamMiddleware } from "./Middleware/ParamMiddleware";

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
