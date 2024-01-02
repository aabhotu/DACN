import React from 'react';
import './Content.scss';
import axios from 'axios';
import {useEffect, useState} from 'react'
import Chart from '../chart/Chart.jsx';
import Table from '../table/Table.jsx';

const Content = ({params}) => {
    // const [params, setParams] = useState([])

    // useEffect(() => {
    //     const fetchData = async () =>{
    //         try{
    //             const datas = await axios.get("http://localhost:8800/tbl_tracker")
    //             setParams(datas.data)
    //         }
    //         catch(err){
    //             console.log(err)
    //         }
    //     }
    //     fetchData()
    // },[])
    const [tems, setTems] = useState([])
    const [hums, setHums] = useState([])
    const [luxs, setluxs] = useState([])

    useEffect(() =>{
        const temsTemp = []
        const humsTemp = []
        const luxsTemp = []

        params.map(param => {
            temsTemp.push(param.temp)
            humsTemp.push(param.hud)
            luxsTemp.push(param.lux)
           
        })
        setTems(temsTemp);
        setHums(humsTemp);
        setluxs(luxsTemp);
    },[params])

    return (
        <div className='content'>
            <div className='content__top'>
                <h2>Bắc Từ Liêm</h2>
                <span>Phường Phú Diễn/ Kiều Mai</span>
            </div>
            <div className='content__bottom'>
                <Table/>
                <div className='content__bottom-chart'>
                    <Chart dat = {tems} textData= {"Nhiệt độ"} params={params}/>
                    <Chart dat = {hums} textData= {"Độ ẩm"} params={params}/>
                    <Chart dat = {luxs} textData= {"Cường độ ánh sáng"} params={params}/>
                </div>
            </div>
        </div>
    );
};

export default Content;