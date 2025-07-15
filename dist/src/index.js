import express from "express";
import cookieParser from "cookie-parser";
import assignmentRouter from "./Routes/AssingmentRoutes.js";
import { config } from "dotenv";
const app = express();
config();
app.use(express.json());
app.use(cookieParser());
app.set('trust-proxy', true);
app.use("/api/v1/Assignments", assignmentRouter);
const PORT = process.env.PORT || 8000;
app.listen(8000, () => {
    console.log(`Server is listening on 8000`);
});
//# sourceMappingURL=index.js.map