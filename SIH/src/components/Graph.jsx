import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
// import jsondata from './SihRealdata.json';
import jsondata from './data.json';
import './Graph.css';
// Register components with ChartJS
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const RealTimeChart = () => {
    const [chartData, setChartData] = useState({
        labels: [], // Initialize with empty labels
        datasets: [
            {
                label: 'Dynamic Data',
                data: [], // Initialize with empty data
                fill: false,
                backgroundColor: 'rgba(220 38 38 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            },
        ],
    });

    const [index, setIndex] = useState(0); // To keep track of current data point
    const [updateCount, setUpdateCount] = useState(0); // To track number of updates

    // Function to update chart data
    const updateChartData = () => {
        if (index >= jsondata.length) {
            return; // Stop if no more data in JSON
        }

        const time = jsondata[index].Time;
        const sexratio = jsondata[index].Sex_Ratio;

        setIndex(index + 1);

        const newTime = time; // Time from JSON
        const newValue = sexratio; // Sex ratio from JSON

        setChartData(prevData => {
            const maxDataPoints = 100;
            const labels = [...prevData.labels, newTime];
            const data = [...prevData.datasets[0].data, newValue];

            if (labels.length > maxDataPoints) {
                labels.shift(); // Remove the oldest label
                data.shift();   // Remove the oldest data point
            }

            return {
                ...prevData,
                labels: labels,
                datasets: [{ ...prevData.datasets[0], data: data }],
            };
        });

        setUpdateCount(updateCount + 1); // Increment update count
    };

    useEffect(() => {
        // Set interval to update chart data every 100ms
        const intervalId = setInterval(() => {
            if (updateCount < 100) { // Stop updates after 100 entries
                updateChartData();
            } else {
                clearInterval(intervalId); // Stop interval after 100 updates
            }
        }, 750);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [updateCount, index]); // Run effect when updateCount or index changes


    const options = {
        scales: {
            x: {
                time: {
                    unit: 'second',
                },
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Real-Time Line Chart',
            },
        },
    };

    return (
        <div className='graph' >
            <Line data={chartData} options={options} />
        </div>
    );
};

export default RealTimeChart;
