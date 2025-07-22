import express from "express";
import cookieParser from "cookie-parser";
import assignmentRouter from "./Routes/AssingmentRoutes.js";
import { config } from "dotenv";
import { AppError } from "./Middleware/ErrorMiddleware.js";
import mongoose from "mongoose";
const app = express();
config();
app.use(express.json());
app.use(cookieParser());

if(process.env.DATABASE_URL){
  mongoose.connect(process.env.DATABASE_URL).catch((err)=>console.log(err));
}
const db=mongoose.connection;

db.once("open",()=>{
  console.log("DB is Connected")
})

app.set("trust-proxy", true);
app.use("/api/v1/Assignments", assignmentRouter);
app.use(AppError);
const PORT = process.env.PORT || 8000;
app.listen(8000, () => {
  console.log(`Server is listening on 8000`);
});
