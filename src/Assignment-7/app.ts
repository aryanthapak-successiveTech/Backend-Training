import express from "express";
import { showHealth } from "./Controller/HealthController.js";

const router = express.Router();

router.route("/").get(showHealth);

export default router;
