import { dummyData } from "../mockData.js";

export const getUsers = async (
  req,
  res,
  next
) => {
  try {
    const limitStr = req.query.limit;
    const pageStr = req.query.page;

    if (!req.query.limit || !req.query.page) {
      return res.status(200).json({
        status: "Successful",
        data: dummyData,
      });
    }

    const limit = Number(limitStr);
    const page = Number(pageStr);

    const startIdx = (page - 1) * limit;
    const filteredData = dummyData.slice(startIdx, startIdx + Number(limit));
    if (filteredData.length == 0) {
      return res.status(404).json({
        status: "Failed",
        message: "Not Found",
      });
    }
    return res.status(200).json({
      status: "Successful",
      data: filteredData,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failed",
      message: "Some error happened",
    });
  }
};
