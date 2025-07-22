import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { seedData } from "../../utils/seederUtil.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface IStoredData {
  username: string;
  email: string;
  password: string;
}

const writeFile = (data: IStoredData):Promise<IStoredData> => {
  return new Promise<IStoredData>((resolve, reject) => {
    const storeData = JSON.stringify(data);
    const newFilePath = path.join(`${__dirname}/../StoredData.json`);
    fs.writeFile(newFilePath, storeData, (error) => {
      reject(error);
    });
    resolve(data);
  });
};
export const registerUser = async (req: Request, res: Response):Promise<Response> => {
  try {
    const { username, password, email } = req.body;
    const isStoredData = await writeFile({ username, password, email });
    isStoredData.password = "";
    return res.status(200).json({
      status: "Success",
      data: isStoredData,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "Failed",
      message: "Something went wrong",
    });
  }
};

export const getSeedData=(req:Request,res:Response,next:NextFunction):Response|void=>{
  try{
    const {count}=req.params;
  const users=seedData(Number(count));
  return res.status(200).json({
    status:"Success",
    data:users
  })
  }
  
  catch(err){
    next(err);
  }
}


