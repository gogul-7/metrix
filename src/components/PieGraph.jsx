import React from "react";
import "./PieGraph.css";
import { ChevronDown } from "react-iconly";
import { PieChart, Pie, Cell } from "recharts";
import Dropdown from "./Dropdown";

const data = [
  {
    name: "Aquisition",
    value: 800,
  },
  {
    name: "Purchase",
    value: 200,
  },
  {
    name: "Retention",
    value: 400,
  },
];

const COLORS = [
  "rgba(85, 112, 241, 1)",
  "rgba(151, 165, 235, 1)",
  "rgba(255, 204, 145, 1)",
];

const value1 = ["This week", "Last Week", "Last Month"];

export const PieGraph = () => {
  return (
    <div className="pie-chart">
      <div className="graph-sub1" style={{ width: "100%", gap: "20px" }}>
        <div className="graph-sub2">
          <p className="font5">Marketing</p>
          <Dropdown values={value1} />
        </div>
        <div className="graph-sub6">
          <div className="graph-sub7">
            <div
              className="pie-dot"
              style={{ backgroundColor: "rgba(85, 112, 241, 1)" }}
            />
            <p className="font7">Acquisition</p>
          </div>
          <div className="graph-sub7">
            <div
              className="pie-dot"
              style={{ backgroundColor: "rgba(151, 165, 235, 1)" }}
            />
            <p className="font7">Purchase</p>
          </div>
          <div className="graph-sub7">
            <div
              className="pie-dot"
              style={{ backgroundColor: "rgba(255, 204, 145, 1)" }}
            />
            <p className="font7">Retention</p>
          </div>
        </div>
      </div>
      <div className="pie-background">
        <div className="pie-inner" />
        <PieChart width={172} height={172}>
          <Pie
            startAngle={270}
            endAngle={630}
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke={COLORS[index % COLORS.length]}
                strokeWidth={2}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};
