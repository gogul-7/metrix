import React from "react";
import "./SalesGraph.css";
import pie from "../assets/pieChart.png";
import { Bag, ChevronDown, TwoUsers } from "react-iconly";
import Dropdown from "./Dropdown";

const value1 = ["This week", "Last Week", "Last Month"];
const value2 = ["This week", "Last Week", "Last Month"];
const value3 = ["This week", "Last Week", "Last Month"];

export const SalesGraph = () => {
  return (
    <div className="graph1">
      <div className="graph-sub1">
        <div className="graph-sub2">
          <div className="icon1">
            <img src={pie} width={16} alt="pie" />
          </div>
          <Dropdown values={value1} />
        </div>
        <div>
          <p className="font4">Total Sales</p>
          <div className="graph-sub4">
            <p className="font5">₦0.00</p>
            <p className="font6">+0.00%</p>
          </div>
        </div>
      </div>
      <div className="graph-sub1">
        <div className="graph-sub2">
          <div className="icon2">
            <TwoUsers set="light" size={20} />
          </div>
          <Dropdown values={value2} />
        </div>
        <div className="graph-sub2">
          <div>
            <p className="font4">Customers</p>
            <div className="graph-sub4">
              <p className="font5">0</p>
              <p className="font6">+0.00%</p>
            </div>
          </div>
          <div style={{ marginRight: "40px" }}>
            <p className="font4">Active</p>
            <div className="graph-sub4">
              <p className="font5">0</p>
              <p className="font6">+0.00%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="graph-sub1">
        <div className="graph-sub2">
          <div className="icon2">
            <Bag set="light" size={20} />
          </div>
          <Dropdown values={value3} />
        </div>
        <div className="graph-sub2">
          <div>
            <p className="font4">All Orders</p>
            <div className="graph-sub4">
              <p className="font5">0</p>
              <p className="font6">+0.00%</p>
            </div>
          </div>
          <div>
            <p className="font4">Pending</p>
            <div className="graph-sub4">
              <p className="font5">0</p>
              <p className="font6">+0.00%</p>
            </div>
          </div>
          <div>
            <p className="font4">Completed</p>
            <div className="graph-sub4">
              <p className="font5">0</p>
              <p className="font6">+0.00%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
