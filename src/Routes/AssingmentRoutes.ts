import express from "express";
import assignment2Router from "../Assignment-2/app.js";

const router = express.Router();
router.use("/Assignment-2", assignment2Router);

export default router;
