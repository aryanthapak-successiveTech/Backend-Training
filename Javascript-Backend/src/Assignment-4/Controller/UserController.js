import fs from "fs";
import path from "path";
import { seedData } from "../../utils/seederUtil.js";

export class UserController {
  writeFile = (data) => {
    return new Promise((resolve, reject) => {
      const storeData = JSON.stringify(data);
      const newFilePath = path.join(`${__dirname}/../StoredData.json`);
      fs.writeFile(newFilePath, storeData, (error) => {
        reject(error);
      });
      resolve(data);
    });
  };

  registerUser = async (req, res) => {
    try {
      const { username, password, email } = req.body;
      const isStoredData = await this.writeFile({ username, password, email });
      const {password:userPassword,...userInfoData}=isStoredData
      return res.status(200).json({
        status: "Success",
        data: userInfoData,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        status: "Failed",
        message: "Something went wrong",
      });
    }
  };

  getSeedData = (req, res) => {
    const { count } = req.params;
    const users = seedData(Number(count));
    return res.status(200).json({
      status: "Success",
      data: users,
    });
  };
}
