import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import jsondata from './data.json';
import './Graph.css';

// Register components with ChartJS
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const RealTimePieChart = () => {
    const [pieData, setPieData] = useState({
        labels: ['Male', 'Female'], // Labels for pie chart
        datasets: [
            {
                label: 'Sex Ratio',
                data: [0, 0], // Initialize with zero data for pie chart
                backgroundColor: ['#36A2EB', '#FF6384'],
                borderColor: ['#36A2EB', '#FF6384'],
                borderWidth: 1,
            },
        ],
    });

    const [index, setIndex] = useState(0); // To keep track of current data point
    const [updateCount, setUpdateCount] = useState(0); // To track number of updates

    // Function to update pie chart data
    const updatePieChartData = () => {
        if (index >= jsondata.length) {
            return; // Stop if no more data in JSON
        }

        const males = jsondata[index].Male_Population; // Assuming you have a field for male count
        const females = jsondata[index].Female_Population // Assuming you have a field for female count

        setIndex(index + 1);

        // Update Pie Chart Data
        setPieData(prevData => {
            return {
                ...prevData,
                datasets: [
                    {
                        ...prevData.datasets[0],
                        data: [males, females], // Update pie data for males and females
                    },
                ],
            };
        });

        setUpdateCount(updateCount + 1); // Increment update count
    };

    useEffect(() => {
        // Set interval to update chart data every 750ms
        const intervalId = setInterval(() => {
            if (updateCount < 99) { // Stop updates after 100 entries
                updatePieChartData();
            } else {
                clearInterval(intervalId); // Stop interval after 100 updates
            }
        }, 750);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [updateCount, index]); // Run effect when updateCount or index changes

    const pieOptions = {
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sex Ratio Pie Chart',
            },
        },
    };

    return (
        <div className='pie'>
            <Pie data={pieData} options={pieOptions} />
        </div>
    );
};

export default RealTimePieChart;



