import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { fetchRepeatCustomers } from '../api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RepeatCustomersChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchRepeatCustomers();
            setData(result);
        };
        getData();
    }, []);

    const chartData = {
        labels: data.map(item => item._id),
        datasets: [
            {
                label: 'Repeat Customers',
                data: data.map(item => item.count),
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Number of Repeat Customers</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default RepeatCustomersChart;
