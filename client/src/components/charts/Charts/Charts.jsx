import "./Charts.css";
import React from "react";
import HorizontalBarChart from "../HorizontalBarChart/HorizontalBarChart"
import VarticalBarChart from "../VarticalBarChart/VarticalBarChart"
import LineChart from "../LineChart/LineChart"
import AreaChart from "../AreaChart/AreaChart"


function Charts() {
  return (
    <div className="charts">

      <div>
        <HorizontalBarChart/>
      </div>
      <div>
        <VarticalBarChart/>
      </div>
      <div>
        <LineChart/>
      </div>
      <div>
        <AreaChart/>
      </div>

    </div>
  );
};

export default Charts;
