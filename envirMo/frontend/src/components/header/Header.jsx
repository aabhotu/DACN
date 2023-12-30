import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.png';
import search from '../../assets/icons/akar-icons_search.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__left' >
                <img src={logo} alt="logo" />
                <div className='header__left-text'>
                    <h4>Khoa Điện Tử</h4>
                    <h4>Trường ĐHCNHN</h4>
                </div>
            </div>
            <div className='header__center'>
                <p className='header__center-main'>Quan trắc môi trường</p>
            </div>
            <div className='header__right'>
                <input placeholder='Tìm kiếm'/>
                <img src={search}/>
            </div>
        </div>
    );
};

export default Header;