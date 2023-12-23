import React from 'react';
import './Table.scss'
import {useState, useEffect} from 'react';
import axios from 'axios';
import temIcon from '../../assets/icons/precipitation.svg'
import hudIcon from '../../assets/icons/precipitation (1).svg'
import luxIcon from '../../assets/icons/fog.svg'

const Table = () => {

    const [params, setParams] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const datas = await axios.get("http://localhost:8800/tbl_tracker")
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
    let luxs = 0


    params.map((param) => {
        const dateData = new Date(param.tim)

        const date = dateData.getDay();
        console.log(date)
        if(date ===dayNow){
            tem = param.temp
            hum = param.hud
            luxs = param.lux
            //dust = param.dust
        }
    })
    
    

    return (
        <div className='container'>
            <h2>Thông số hiện tại</h2>
            <div className='container__items'>
                <div className='container__items-item'>
                    <p>Địa điểm</p>
                    <div className='container__items-item-icon'>
                        <span>Phú Diễn</span>
                    </div>
                    
                </div>
                <div className='container__items-item'>
                    <p>Nhiệt độ</p>
                    <div className='container__items-item-icon'>
                        <img src = {temIcon} alt="tempIcon"/>
                        <span>{tem}</span>
                    </div>
                </div>
                <div className='container__items-item'>
                    <p>Độ ẩm</p>
                    <div className='container__items-item-icon'>
                        <img src = {hudIcon} alt="tempIcon"/>
                        <span>{hum}</span>
                    </div>
                </div>
                <div className='container__items-item'>
                    <p>Cường độ ánh sáng</p>
                    <div className='container__items-item-icon'>
                        <img src = {luxIcon} alt="tempIcon"/>
                        <span>{luxs}</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Table;