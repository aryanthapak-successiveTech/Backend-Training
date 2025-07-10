import { dummyData } from "../mockData.js";

export const getUsers = async (req, res, next) => {
    console.log(req);
  try {
    return res.status(200).json({
      status: "Successful",
      data: dummyData,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failed",
      message: "Some error happend",
    });
  }
};
