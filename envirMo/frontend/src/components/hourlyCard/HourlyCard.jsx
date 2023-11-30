import React from 'react';
import './HourlyCard.scss'
import Hourly from './hourly/Hourly.jsx'
import rainy from '../../assets/icons/rainy.svg'
import rain from '../../assets/icons/rain.svg'
import thunder from '../../assets/icons/thunder.svg'
import sunCloudRain from '../../assets/icons/sun-cloud-rain.svg'
import sunDown from '../../assets/icons/sunDown.svg'
import moonCloudRain from '../../assets/icons/moon-cloud-rain.svg'
import moonCloud from '../../assets/icons/moon-cloud.svg'
import moon from '../../assets/icons/moon.svg'

const HourlyCard = () => {
    return (
        <div className='hourlyCard'>
            <Hourly icon = {rainy} time = "16:00"/>
            <Hourly icon = {rain} time = "16:00"/>
            <Hourly icon = {thunder} time = "16:00"/>
            <Hourly icon = {sunCloudRain} time = "16:00"/>
            <Hourly icon = {sunDown} time = "16:00"/>
            <Hourly icon = {moonCloudRain} time = "16:00"/>
            <Hourly icon = {moonCloud} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
            <Hourly icon = {moon} time = "16:00"/>
        </div>
    );
};

export default HourlyCard;