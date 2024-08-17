import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust to your backend URL

export const fetchTotalSales = async (interval) => {
    const response = await axios.get(`${API_URL}/sales/total-sales?interval=${interval}`);
    return response.data;
};

export const fetchSalesGrowthRate = async () => {
    const response = await axios.get(`${API_URL}/sales/sales-growth-rate`);
    return response.data;
};

export const fetchNewCustomers = async () => {
    const response = await axios.get(`${API_URL}/customers/new-customers`);
    return response.data;
};

export const fetchRepeatCustomers = async () => {
    const response = await axios.get(`${API_URL}/customers/repeat-customers`);
    return response.data;
};

export const fetchGeoDistribution = async () => {
    const response = await axios.get(`${API_URL}/geographical/geo-distribution`);
    return response.data;
};
