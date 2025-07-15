import express from "express";
import assignment2Router from "../Assignment-2/app.js";
import assignment3Router from "../Assignment-3/app.js";
const router = express.Router();
router.use("/Assignment-2", assignment2Router);
router.use("/Assignment-3", assignment3Router);
export default router;
//# sourceMappingURL=AssingmentRoutes.js.map