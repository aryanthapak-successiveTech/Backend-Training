import express from "express";
import assignment2Router from "../Assignment-2/app.js";
import assignment3Router from "../Assignment-3/app.js";
import assignment4router from "../Assignment-4/app.js";
import assignment5router from "../Assignment-5/app.js";
import assignment7router from "../Assignment-7/app.js";
import assignment9router from "../Assignment-9/app.js"
const router = express.Router();

router.use("/assignment-2", assignment2Router);
router.use("/assignment-3", assignment3Router);
router.use("/assignment-4", assignment4router);
router.use("/assignment-5", assignment5router);
router.use("/assignment-7", assignment7router);
router.use("/assignment-8",assignment9router);
export default router;
