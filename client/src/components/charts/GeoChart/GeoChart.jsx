import "./GeoChart.css";
import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import { countriesContext } from "../../../contexts/countries-context"
import { useContext } from 'react';


export default function GeoChart() {
  const { countries, setCountries } = useContext(countriesContext)

  const setup = ["Country", "Popularity"]
  const population = [
    { 0: 200 },
    { 1: 300 },
    { 2: 400 },
    { 3: 500 },
    { 4: 600 },
    { 5: 700 },
    { 6: 800 },
    { 7: 900},
    { 8: 1000}
  ]
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Store Popularity by country",
      },
    },
  };
  const data = [[...setup], ...countries?.map((obj, i) => [obj = obj.countryName, population[i][i]])];

  return (
    <Chart chartType="GeoChart" options={options} data={data} />
  )
};
