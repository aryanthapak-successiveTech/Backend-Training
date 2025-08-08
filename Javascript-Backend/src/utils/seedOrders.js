import { faker } from "@faker-js/faker";
import { config } from "dotenv";
import mongoose from "mongoose";
import Order from "../Assignment-13/Models/Order.model.js";
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

const generateSeededOrder = () => {
  const orderStatus = ["Pending", "Shipped", "Delivered"];
  const randStatus = Math.floor(Math.random() * 3);
  const productItems=[];
  for(let i=0;i<3;i++){
    productItems.push(generateRandomProduct());
  }
  const data = {
    orderId: faker.string.uuid(),
    customerName: faker.internet.username(),
    status: orderStatus[randStatus],
    items: productItems,
    orderDate:faker.date.between({from:'2020-01-01T00:00:00.000Z',to:'2025-08-06T00:00:00.000Z'}),
    totalAmount:faker.number.int({
        min:1,
        max:100000
    })
  };

  console.log(data);
  return data;
};

const generateRandomProduct=()=>{
  const randomProduct={
    productName:faker.commerce.productName(),
    price:faker.commerce.price(),
    quantity:faker.number.int({
        min:1,
        max:20
    })
  }

  return randomProduct
}

const seedData=async()=>{
    for(let i=0;i<20;i++){
        await Order.insertOne(generateSeededOrder());
    }
}

seedData();