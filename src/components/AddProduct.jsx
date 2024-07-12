import React, { useContext } from "react";
import "./AddProduct.css";
import { Bag } from "react-iconly";
import AppContext from "../store/AppContext";

export const AddProduct = () => {
  const { setBackDrop } = useContext(AppContext);

  return (
    <div className="add-product-container">
      <div className="bag-circle">
        <Bag set="bulk" primaryColor="rgba(190, 192, 202, 1)" size={60} />
      </div>
      <p className="font9">No Orders Yet?</p>
      <p className="font15">
        Add products to your store and start selling to see orders here.
      </p>
      <button onClick={() => setBackDrop(true)} className="button-blue">
        <p style={{ fontSize: "34px", marginBottom: "4px" }}>+</p>
        <p style={{ fontSize: "16px", fontWeight: "400" }}>New Product</p>
      </button>
    </div>
  );
};
