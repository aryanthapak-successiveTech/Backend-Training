import { seedData } from "../../utils/seederUtil.js";

export class DataController {
  dataSeeder = (req,res, next) => {
    const { count }= req.body;
    const data = seedData(count);
    return res.status(200).json({
      status: "Success",
      data,
    });
  };
}
