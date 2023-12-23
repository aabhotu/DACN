import React from 'react';
import './Content.scss';
import axios from 'axios';
import {useEffect, useState} from 'react'
import Chart from '../chart/Chart.jsx';
import Table from '../table/Table.jsx';

const Content = () => {

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
    
    const tems = []
    const hums = []
    const luxs = []
   
    params.map(param => {
        tems.push(param.temp)
        hums.push(param.hud)
        luxs.push(param.lux)
       
    })

    return (
        <div className='content'>
            <div className='content__top'>
                <h2>Bắc Từ Liêm</h2>
                <span>Phường Phú Diễn/ Kiều Mai</span>
            </div>
            <div className='content__bottom'>
                <Table/>
                <div className='content__bottom-chart'>
                    <Chart dat = {tems} textData= {"Nhiệt độ"}/>
                    <Chart dat = {hums} textData= {"Độ ẩm"}/>
                    <Chart dat = {luxs} textData= {"Cường độ ánh sáng"}/>
                </div>
            </div>
        </div>
    );
};

export default Content;