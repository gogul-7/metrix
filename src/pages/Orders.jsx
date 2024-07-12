import React from "react";
import { AddProduct } from "../components/AddProduct";

const Orders = () => {
  return (
    <div className="orders-container">
      <p className="font8">Recent Orders</p>
      <AddProduct />
    </div>
  );
};

export default Orders;
