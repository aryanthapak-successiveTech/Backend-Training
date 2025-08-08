import { config } from "dotenv";
import mongoose from "mongoose";
import {
  checkPerformance,
  findAverageOrder,
  findCustomersWithMultipleOrders,
  findDeliveredOrdersRevenue,
  findIndexes,
  findMonthlyRevenue,
  findMostSoldProducts,
  findProductBasedTotalQuantityAndRevenue,
  findProductNames,
  findStatusBasedOrderCount,
  findTopSpenders,
  findTotalRevenue,
} from "./Services/OrderService";
config();

const dbUrl = process.env.DATABASE_URL as string;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error(err);
  });
