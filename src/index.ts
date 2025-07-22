import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import assignmentRouter from "./Routes/AssingmentRoutes.js";
import { config } from "dotenv";
import { AppError } from "./Middleware/ErrorMiddleware.js";
import mongoose from "mongoose";
const app = express();
config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/assignments", assignmentRouter);
app.use(AppError);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
