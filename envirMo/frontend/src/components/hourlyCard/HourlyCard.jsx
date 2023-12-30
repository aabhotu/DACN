import React from 'react';
import './HourlyCard.scss'
import axios from 'axios';
import {useEffect, useState} from 'react'
import Hourly from './hourly/Hourly.jsx'
import rainy from '../../assets/icons/rainy.svg'
import rain from '../../assets/icons/rain.svg'
import thunder from '../../assets/icons/thunder.svg'
import sunCloudRain from '../../assets/icons/sun-cloud-rain.svg'
import sunDown from '../../assets/icons/sunDown.svg'
import moonCloudRain from '../../assets/icons/moon-cloud-rain.svg'
import moonCloud from '../../assets/icons/moon-cloud.svg'
import moon from '../../assets/icons/moon.svg'
import clouds from '../../assets/icons/cloud_1163624.png'


function HourlyCard() {

    const [params, setParams] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const datas = await axios.get("http://localhost:8800/tbl_tracker")
                setParams(datas.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])

    return (
        <div className='hourlyCard'>
        {params && 
            params.map(param => {
                const dateData = new Date(param.tim)

                const hour = dateData.getHours()
                const day = dateData.getDate()
                const dateNow = new Date()
                if (day === dateNow.getDate())
                {
                    if('rain' === param.stat && hour < 19){
                        return (
                            <Hourly icon = {rain} time = {hour}/>
                        )
                    }
                    else if('clouds' === param.stat){
                        return (
                            <Hourly icon = {clouds} time = {hour}/>
                        )
                    }
                    else if('rainy' === param.stat){
                        return (
                            <Hourly icon = {rainy} time = {hour}/>
                        )
                    }
                    else if('thunder' === param.stat){
                        return (
                            <Hourly icon = {thunder} time = {hour}/>
                        )
                    }
                    else if('sunCloudRain' === param.stat){
                        return (
                            <Hourly icon = {sunCloudRain} time = {hour}/>
                        )
                    }
                    else if('sunDown' === param.stat){
                        return (
                            <Hourly icon = {sunDown} time = {hour}/>
                        )
                    }
                    else if('rain' === param.stat && hour >=19){
                        return (
                            <Hourly icon = {moonCloudRain} time = {hour}/>
                        )
                    }
                    else if('moonCloud' === param.stat){
                        return (
                            <Hourly icon = {moonCloud} time = {hour}/>
                        )
                    }
                    else if ('clear' === param.stat && hour >19){
                        return (
                            <Hourly icon = {moon} time = {hour}/>
                        )
                    }
                    else {
                        return (
                            <Hourly icon = {moon} time = {hour}/>
                        )
                    }
                }
                
                
                })
            
        }
            
        </div>
    );
};

export default HourlyCard;