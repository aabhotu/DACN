import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react'
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


const Chart = ({dat, textData, params}) => {

    return (
        <div className='chart'>
            <Line
                data={{
                labels: params.map(param => {
                    
                            const dateData = new Date(param.tim)

                            const hour = dateData.getHours()
                            const day = dateData.getDate()
                            const month = dateData.getMonth()
                            const year = dateData.getYear()
                            const dateNow = new Date()
                            // console.log(dateNow.getDate(), "--", day)
                            if (day === dateNow.getDate() && month === dateNow.getMonth() && year === dateNow.getYear()) 
                                return hour
                            // return hour
                    

                        }),
                datasets: [
                    {
                    data: dat,
                    label: textData,
                    borderColor: 'rgb(75, 192, 192)',
                    fill: false,
                    tension: 0.1,
                    }
                ]
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            // text: 'Chart.js Line Chart',
                        },
                    },
                    scales: {
                        x: {
                            min: 0,
                            beginAtZero: true,
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
            />
        </div>
    );
};

export default Chart;