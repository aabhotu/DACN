import React from 'react';
import './Footer.scss'
import logo from '../../assets/images/logo.png';
import sun from '../../assets/icons/sun.svg';
import partly from '../../assets/icons/partly.svg'
import rain from '../../assets/icons/rain (1).svg'
import rainy from '../../assets/icons/rainy (1).svg'
import thunder from '../../assets/icons/thunder (1).svg'
import cloud from '../../assets/icons/clouds.svg'
import moon from '../../assets/icons/moon.svg'
import copyright from '../../assets/icons/copyright.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <div className='footer__left-top'>
                    <img src={logo} alt="logo"/>
                    <div className='footer__left-top-text'>
                        <h4>Khoa Điện Tử</h4>
                        <h4>Trường ĐHCNHN</h4>
                    </div>
                </div>
                <div className='footer__left-bottom'>
                    <p>Địa chỉ: số 298 đường Cầu Diễn, quận Bắc Từ Liêm, Hà Nội</p>
                    <p>Email: dhcnhn@haui.edu.vn </p>
                </div>
            </div>
            <div className='footer__center'>
                <div className='footer__center-icon'>
                    <img src={sun} alt='sun'/>
                    <img src={partly} alt='partly'/>
                    <img src={rainy} alt='rainy'/>
                    <img src={rain} alt='rain'/>
                    <img src={thunder} alt='thunder'/>
                    <img src={cloud} alt='cloud'/>
                    <img src={moon} alt='moon'/>
                </div>
                <div className='footer__center-decs'>
                    <img src={copyright} alt='copyrights'/>
                    <span>Bản quyền thuộc  Khoa Điện tử Đại học Công Nghiệp Hà Nội</span>
                </div>
            </div>
            <div className='footer__right'>
                <div className='footer__right-one'>
                    <p>Điều khoản sử dụng</p>
                    <p>Chính sách và quyền riêng tư</p>
                    <p>Nhà cung cấp dữ liệu</p>
                </div>
                <div className='footer__right-two'>
                    <p>Phản hồi </p>
                    <p>API thời tiết</p>
                    <p>Góp ý</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;