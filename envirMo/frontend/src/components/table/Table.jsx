import React from 'react';
import './Table.scss'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { format, parseISO, getDay, getDate } from 'date-fns';

const Table = () => {

    const [params, setParams] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const datas = await axios.get("http://localhost:8800/specifi")
                console.log(datas.data)
                setParams(datas.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])

    const dateNow = new Date()
    const dayNow = dateNow.getDay()
    let tem = 0
    let hum = 0
    let pres = 0
    let dust = 0


    params.map((param) => {
        const dateData = new Date(param.time)

        const date = dateData.getDay();
        console.log(date)
        if(date ===dayNow){
            tem = param.tem
            hum = param.hudmi
            pres = param.press 
            dust = param.dust
        }
    })
    
    

    return (
        <div className='container'>
            <h2>Thông số hiện tại</h2>
            <div className='container__items'>
                <div className='container__items-item tem'>
                    <p>Nhiệt độ</p>
                    <p>{tem}</p>
                </div>
                <div className='container__items-item hum'>
                    <p>Độ ẩm</p>
                    <p>{hum}</p>
                </div>
                <div className='container__items-item pre'>
                    <p>Áp suất</p>
                    <p>{pres}</p>
                </div>
                <div className='container__items-item dust'>
                    <p>Nồng độ bụi mịn</p>
                    <p>{dust}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Table;