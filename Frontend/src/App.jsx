import React, { useState } from 'react';
import TotalSalesChart from './components/TotalSalesChart';
import SalesGrowthRateChart from './components/SalesGrowthRateChart';
import NewCustomersChart from './components/NewCustomersChart';
import RepeatCustomersChart from './components/RepeatCustomersChart';
import GeoDistributionChart from './components/GeoDistributionChart';

function App() {
    const [interval, setInterval] = useState('monthly');

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">E-commerce Data Visualization</h1>
                <div className="mt-4">
                    <label htmlFor="interval" className="mr-2">Select Interval:</label>
                    <select
                        id="interval"
                        value={interval}
                        onChange={(e) => setInterval(e.target.value)}
                        className="border p-2 rounded"
                    >
                        <option value="daily">Daily</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>
            </header>
            <main>
                <TotalSalesChart interval={interval} />
                <SalesGrowthRateChart />
                <NewCustomersChart />
                <RepeatCustomersChart />
                <GeoDistributionChart />
            </main>
        </div>
    );
}

export default App;
