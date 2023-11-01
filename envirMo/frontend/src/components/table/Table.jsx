import React from 'react';
import './Table.scss'

const Table = () => {
    return (
        <div className='container'>
            <h2>Thông số hiện tại</h2>
            <div className='container__items'>
                <div className='container__items-item tem'>
                    <p>Nhiệt độ</p>
                    <p>24</p>
                </div>
                <div className='container__items-item hum'>
                    <p>Độ ẩm</p>
                    <p>24</p>
                </div>
                <div className='container__items-item pre'>
                    <p>Áp suất</p>
                    <p>24</p>
                </div>
                <div className='container__items-item dust'>
                    <p>Nồng độ bụi mịn</p>
                    <p>24</p>
                </div>
            </div>
            
        </div>
    );
};

export default Table;