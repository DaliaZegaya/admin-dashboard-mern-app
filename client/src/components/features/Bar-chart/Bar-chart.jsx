import "./Bar-chart.css";
import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ordersContext } from "../../../contexts/orders-context"
import { useContext } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



export default function BarChart() {
  const { orders, setOrders } = useContext(ordersContext)
  console.log(orders)
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: orders?.map(item=>item.itemsNumber),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: orders?.map(item=>item.itemsNumber),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Bar className='pie-chart' options={options} data={data} />;
}