import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { fetchSalesGrowthRate } from '../api';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesGrowthRateChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchSalesGrowthRate();
            setData(result);
        };
        getData();
    }, []);

    const chartData = {
        labels: data.map(item => item._id),
        datasets: [
            {
                label: 'Sales Growth Rate',
                data: data.map(item => item.growthRate),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
            },
        ],
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Sales Growth Rate Over Time</h2>
            <Line data={chartData} />
        </div>
    );
};

export default SalesGrowthRateChart;
