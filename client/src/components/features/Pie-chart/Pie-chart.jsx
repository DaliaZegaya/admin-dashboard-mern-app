import "./Pie-chart.css";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { productsContext } from "../../../contexts/products-context"
import { useContext } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {
  const { products, setProducts } = useContext(productsContext)
  const data = {
    labels: ["adidas", "nike", "puma", "vans", "convarse", "new balance"],
    datasets: [
      {
        label: '# of Votes',
        data: products.slice(0,8).map(item=>item.brand.length),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return(
    <div className="pie-chart">
      <Pie data={data} />
    </div>
  ) 
}