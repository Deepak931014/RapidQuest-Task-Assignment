import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { fetchGeoDistribution } from '../api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GeoDistributionChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchGeoDistribution();
            setData(result);
        };
        getData();
    }, []);

    const chartData = {
        labels: data.map(item => item._id),
        datasets: [
            {
                label: 'Geographical Distribution',
                data: data.map(item => item.count),
                backgroundColor: 'rgba(255,159,64,0.2)',
                borderColor: 'rgba(255,159,64,1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Geographical Distribution of Customers</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default GeoDistributionChart;
