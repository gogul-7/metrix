import React from "react";
import "./Pages.css";
import { SalesGraph } from "../components/SalesGraph";
import { PieGraph } from "../components/PieGraph";

const Dashboard = () => {
  return (
    <div className="dashboard-content-container">
      <SalesGraph />
      <PieGraph />
    </div>
  );
};

export default Dashboard;
