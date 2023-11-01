import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import {Line} from 'react-chartjs-2'
import './Chart.scss'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = () => {
    return (
        <div className='chart'>
            <Line
                data={{
                labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                datasets: [
                    {
                    data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                    label: "Nhiệt độ",
                    borderColor: "#3e95cd",
                    fill: false
                    },
                    {
                    data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                    label: "Độ ẩm",
                    borderColor: "#8e5ea2",
                    fill: false
                    },
                    {
                    data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                    label: "Áp suất",
                    borderColor: "#3cba9f",
                    fill: false
                    },
                    {
                    data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                    label: "Nồng độ bụi mịn",
                    borderColor: "#e8c3b9",
                    fill: false
                    }
                ]
                }}
                options={{
                title: {
                    display: true,
                    text: "World population per region (in millions)"
                },
                legend: {
                    display: true,
                    position: "bottom"
                }
                }}
            />

            {/* <Line options={options} data ={data}/> */}
        </div>
    );
};

export default Chart;