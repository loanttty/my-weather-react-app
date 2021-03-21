import React from "react";
import { Line } from "react-chartjs";

export default function Chart() {
  return (
    <div className="chart">
      <canvas id="my-chart" width="400" height="150"></canvas>
    </div>
  );
}
