import express from "express";
import { validateDetails } from "./Middleware/ValidationMiddleware.js";
import { loginUser } from "./Controller/AuthController.js";
import { decryptToken } from "./Middleware/AuthMiddleware.js";
import { getDummyUsersData, getUsers } from "./Controller/DataController.js";
import { getError } from "./Controller/ErrorController.js";
import { validateParams } from "./Middleware/ParamMiddleware.js";

const router=express.Router();

router.route("/login").post(validateDetails,loginUser);
router.route("/users/:count").get(decryptToken,getDummyUsersData);
router.route("/error").get(getError);
router.route("/users").get(validateParams,getUsers);

export default router;
