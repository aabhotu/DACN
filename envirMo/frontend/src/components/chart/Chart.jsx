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

const Chart = () => {

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
    
    const tems = []
    const hums = []
    const luxs = []
    const dusts = []
    let weekday
    params.map(param => {
        tems.push(param.temp)
        hums.push(param.hud)
        luxs.push(param.lux)
        // dusts.push(param.dust)
    })
    console.log(luxs)

    return (
        <div className='chart'>
            <Line
                data={{
                labels: params.map(param => {
                    
                    const dateData = new Date(param.tim)

                    const hour = dateData.getHours()
                    //console.log(dateData)

                    //if (hour %2 ===0) return hour 
                    return hour
                    // const date = dateData.getDay();

                    
                    // switch (date) {
                    //     case 0:
                    //     weekday = 'Sunday';
                    //     break;
                    //     case 1:
                    //     weekday = 'Monday';
                    //     break;
                    //     case 2:
                    //     weekday = 'Tuesday';
                    //     break;
                    //     case 3:
                    //     weekday = 'Wednesday';
                    //     break;
                    //     case 4:
                    //     weekday = 'Thursday';
                    //     break;
                    //     case 5:
                    //     weekday = 'Friday';
                    //     break;
                    //     case 6:
                    //     weekday = 'Saturday';
                    //     break;
                    //     default:
                    //     weekday = 'Undefined';
                    // }
                    // return weekday;

                }),
                datasets: [
                    {
                    data: tems,
                    label: "Nhiệt độ",
                    borderColor: "#3e95cd",
                    fill: false
                    },
                    {
                    data: hums,
                    label: "Độ ẩm",
                    borderColor: "#8e5ea2",
                    fill: false
                    },
                    {
                    data: luxs,
                    label: "Áp suất",
                    borderColor: "#3cba9f",
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