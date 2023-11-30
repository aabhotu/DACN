import React from 'react';
import './Hourly.scss'

const Hourly = ({icon, time}) => {
    return (
        <div className='hourly'>
            <img src={icon} alt='icon'/>
            <span>{time}</span>
        </div>
    );
};

export default Hourly;