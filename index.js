import express from "express";
import cookieParser from "cookie-parser";
import assignmentRouter from "./Routes/AssingmentRouter.js"
const app=express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/Assignments",assignmentRouter);

app.listen(8000,()=>{
    console.log(`Server is listening on 8000`)
});
