import "./VarticalBarChart.css";
import React from 'react';
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
      text: 'Bar Chart',
    },
  },
};

function VarticalBarChart() {
  const { orders, setOrders } = useContext(ordersContext)

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: orders?.map(item => item.itemsNumber),
        backgroundColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Dataset 2',
        data: orders?.map(item => item.itemsNumber),
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return (
    <div className="vartical-bar-chart">
      <Bar options={options} data={data} />
    </div>
  );
};

export default VarticalBarChart;
