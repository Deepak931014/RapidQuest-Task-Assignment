import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { fetchTotalSales } from '../api';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TotalSalesChart = ({ interval }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchTotalSales(interval);
            setData(result);
        };
        getData();
    }, [interval]);

    const chartData = {
        labels: data.map(item => item._id),
        datasets: [
            {
                label: 'Total Sales',
                data: data.map(item => item.totalSales),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
            },
        ],
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Total Sales Over Time ({interval})</h2>
            <Line data={chartData} />
        </div>
    );
};

export default TotalSalesChart;
