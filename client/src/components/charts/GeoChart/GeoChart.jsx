import "./GeoChart.css";
import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import { countriesContext } from "../../../contexts/countries-context"
import { useContext } from 'react';

const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
  ["Israel",1000]
];

function GeoChart() {
  const { countries, setCountries } = useContext(countriesContext)
  console.log(countries);

  // const data = countries.map((item)=>item.countryName);
  const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
    ["Israel",1000]
  ];

  return (
    <div className="geo-chart">
      <Chart chartType="GeoChart" width="35vw" height="50vh" data={data} />
    </div>
  );
};

export default GeoChart;
