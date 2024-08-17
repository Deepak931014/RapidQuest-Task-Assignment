import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { fetchNewCustomers } from '../api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const NewCustomersChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchNewCustomers();
            setData(result);
        };
        getData();
    }, []);

    const chartData = {
        labels: data.map(item => item._id),
        datasets: [
            {
                label: 'New Customers',
                data: data.map(item => item.count),
                backgroundColor: 'rgba(153,102,255,0.2)',
                borderColor: 'rgba(153,102,255,1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">New Customers Added Over Time</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default NewCustomersChart;
