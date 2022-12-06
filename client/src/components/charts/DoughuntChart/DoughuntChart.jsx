import "./DoughuntChart.css";
import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { productsContext } from '../../../contexts/products-context'

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
    const { products, setProducts } = useContext(productsContext)
    const data = {
        labels: products.slice(0,6).map(item => item.category),
        datasets: [
            {
                label: 'Quantity',
                data: products.map(item => item.quantity),
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
                borderWidth: 0.5,
            },
        ],
    };
    return <Doughnut data={data} />;
}

export default DoughnutChart
