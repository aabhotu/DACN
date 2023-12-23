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

const Chart = ({dat, textData}) => {

    const [params, setParams] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const datas = await axios.get("http://localhost:8800/tbl_tracker")
                //console.log(datas.data)
                setParams(datas.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])


    return (
        <div className='chart'>
            <Line
                data={{
                labels: params.map(param => {
                    
                            const dateData = new Date(param.tim)

                            const hour = dateData.getHours()
                            //if (hour %2 ===0) return hour
                            return hour
                    

                        }),
                datasets: [
                    {
                    data: dat,
                    label: textData,
                    borderColor: 'rgb(75, 192, 192)',
                    fill: false,
                    tension: 0.1
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
        </div>
    );
};

export default Chart;