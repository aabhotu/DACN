import React from 'react';
import './Content.scss';
import Chart from '../chart/Chart.jsx';
import Table from '../table/Table.jsx';

const Content = () => {
    return (
        <div className='content'>
            <div className='content__top'>
                <h2>Bắc Từ Liêm</h2>
                <span>Phường Phú Diễn/ Kiều Mai</span>
            </div>
            <div className='content__bottom'>
                <div className='content__bottom-chart'>
                    <Chart />
                </div>
                <Table/>
            </div>
        </div>
    );
};

export default Content;