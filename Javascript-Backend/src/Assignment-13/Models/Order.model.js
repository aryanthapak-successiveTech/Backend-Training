import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: String,
  quantity: Number,
  price: Number,
});

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: [true, "Order id must be present"],
    unique: [true, "Order id must be unique"],
  },

  customerName: {
    type: String,
    required: [true, "Customer id must be present"],
  },

  orderDate: {
    type: Date,
    default: Date.now(),
  },

  status: {
    type: String,
    enum: ["Pending", "Shipped", "Delivered"],
    required: [true, "Order status should be present"],
  },

  items: {
    type: [productSchema],
    required: [true, "Products must be present"],
  },

  totalAmount: {
    type: Number,
    required: [true, "Total amount should be present"],
  },
});

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;
