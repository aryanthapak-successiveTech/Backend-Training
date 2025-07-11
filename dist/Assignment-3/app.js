import express from "express";
import { validateUser } from "./Middleware/ValidationMiddleware.js";
import { registerUser } from "./Controller/UserController.js";
const router = express.Router();
router.route("/").post(validateUser, registerUser);
export default router;
