import { config } from "dotenv";
import mongoose from "mongoose";
import { checkPerformance, findAverageOrder, findCustomersWithMultipleOrders, findDeliveredOrdersRevenue, findIndexes, findMonthlyRevenue, findMostSoldProducts, findProductBasedTotalQuantityAndRevenue, findProductNames, findStatusBasedOrderCount, findTopSpenders, findTotalRevenue } from "./Services/OrderService.js";
config();

const dbUrl = process.env.DATABASE_URL;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error(err);
  });

checkPerformance()