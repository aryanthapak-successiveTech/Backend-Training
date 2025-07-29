import express from "express";
import { HealthController } from "./Controller/HealthController";

const router = express.Router();
const healthController=new HealthController();
router.route("/").get(healthController.showHealth);

export default router;
