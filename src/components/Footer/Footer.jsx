import React from 'react';

import Logo from '../../assets/icons/logo.png';

import './Footer.css';

const Footer = () => {
  return (
    <div className='app__footer'>
        <div className='app__footer-logo'>
        <a href="#home"> <img src={Logo} alt="logo"/></a>
        </div>
        <div className='app__footer-links'>
            <ul className='permalinks'>
                <li><a href='/'>Home</a></li>
                <li><a href='#exercises'>Exercises</a></li>
                <li><a href='https://my-akdmi.com/' target="_blank" rel='noreferrer'>Blog</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Footer